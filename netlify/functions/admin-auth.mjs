import { createHmac, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scryptAsync = promisify(scrypt);
const cookieName = 'oam_admin_session';
const sessionSeconds = 8 * 60 * 60;
const attempts = new Map();
const attemptWindowMs = 15 * 60 * 1000;
const maxAttempts = 6;

function response(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers }
  });
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

function cookieValue(request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const entry = cookieHeader.split(';').map(part => part.trim()).find(part => part.startsWith(`${cookieName}=`));
  return entry ? entry.slice(cookieName.length + 1) : '';
}

function signature(payload, secret) {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function hasValidSession(request, secret) {
  const [payload, supplied, extra] = cookieValue(request).split('.');
  if (!payload || !supplied || extra) return false;
  const expected = signature(payload, secret);
  if (!safeEqual(supplied, expected)) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return session.exp > Date.now() && session.sub;
  } catch {
    return false;
  }
}

function cookie(token, maxAge) {
  return `${cookieName}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

function sameSiteRequest(request) {
  const origin = request.headers.get('origin');
  if (!origin || !process.env.URL) return true;
  try { return new URL(origin).origin === new URL(process.env.URL).origin; }
  catch { return false; }
}

export default async function handler(request) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !process.env.ADMIN_PHONE || !process.env.ADMIN_PASSWORD_SALT || !process.env.ADMIN_PASSWORD_HASH) {
    return response({ message: 'Admin login is not configured.' }, 503);
  }

  if (request.method === 'GET') {
    return response({ authenticated: Boolean(hasValidSession(request, secret)) });
  }
  if (request.method !== 'POST') return response({ message: 'Method not allowed.' }, 405, { Allow: 'GET, POST' });
  if (!sameSiteRequest(request)) return response({ message: 'Request rejected.' }, 403);

  let body;
  try { body = await request.json(); }
  catch { return response({ message: 'Invalid request.' }, 400); }

  if (body.action === 'logout') {
    return response({ authenticated: false }, 200, { 'Set-Cookie': cookie('', 0) });
  }

  const ip = request.headers.get('x-nf-client-connection-ip') || 'unknown';
  const now = Date.now();
  const attemptsForIp = (attempts.get(ip) || []).filter(time => now - time < attemptWindowMs);
  if (attemptsForIp.length >= maxAttempts) {
    attempts.set(ip, attemptsForIp);
    return response({ message: 'Too many attempts. Please wait 15 minutes and try again.' }, 429);
  }

  const phone = String(body.phone || '').replace(/\D/g, '');
  const password = String(body.password || '');
  const expectedPhone = String(process.env.ADMIN_PHONE).replace(/\D/g, '');
  const salt = Buffer.from(process.env.ADMIN_PASSWORD_SALT, 'hex');
  if (salt.length < 16) return response({ message: 'Admin login is not configured.' }, 503);
  const candidateHash = await scryptAsync(password, salt, 32);
  const valid = safeEqual(phone, expectedPhone) && safeEqual(candidateHash.toString('hex'), process.env.ADMIN_PASSWORD_HASH);
  if (!valid) {
    attemptsForIp.push(now);
    attempts.set(ip, attemptsForIp);
    return response({ message: 'Phone number or password is incorrect.' }, 401);
  }

  attempts.delete(ip);
  const payload = Buffer.from(JSON.stringify({ sub: expectedPhone, exp: now + sessionSeconds * 1000 })).toString('base64url');
  const token = `${payload}.${signature(payload, secret)}`;
  return response({ authenticated: true }, 200, { 'Set-Cookie': cookie(token, sessionSeconds) });
}
