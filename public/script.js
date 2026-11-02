const defaultVehicles = [
  {id:'toyota-rav4-2020',make:'Toyota',model:'RAV4',trim:'SUV',year:2020,price:3600000,transmission:'Automatic',fuel:'Petrol',mileage:'60,120 km',category:'SUV',featured:true,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'hyundai-tucson-2011',make:'Hyundai',model:'Tucson',trim:'SUV',year:2011,price:10500000,transmission:'Automatic',fuel:'Petrol',mileage:'180,000 km',category:'SUV',featured:false,status:'Available',location:'Kigali',image:'photo-1606664515524-ed2f786a0bd6'},
  {id:'toyota-prado-txl-2017',make:'Toyota',model:'Land Cruiser Prado',trim:'TXL',year:2017,price:50000000,transmission:'Automatic',fuel:'Diesel',mileage:'130,000 km',category:'SUV',featured:true,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-land-cruiser-v8-2016',make:'Toyota',model:'Land Cruiser V8',trim:'4WD SUV',year:2016,price:0,transmission:'Automatic',fuel:'Diesel',mileage:'Contact for details',category:'SUV / Cross-country',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-harrier-2018',make:'Toyota',model:'Harrier',trim:'Cross-country SUV',year:2018,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Crossover / Cross-country',featured:false,status:'Available',location:'Kigali',image:'photo-1606664515524-ed2f786a0bd6'},
  {id:'toyota-noah-2019',make:'Toyota',model:'Noah',trim:'Family van',year:2019,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Van / MPV',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-corolla-2015',make:'Toyota',model:'Corolla',trim:'Sedan',year:2015,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Sedan',featured:false,status:'Available',location:'Kigali',image:'photo-1623869675781-80aa31012a5a'},
  {id:'toyota-premio-2014',make:'Toyota',model:'Premio',trim:'Comfort sedan',year:2014,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Sedan',featured:false,status:'Available',location:'Kigali',image:'photo-1623869675781-80aa31012a5a'},
  {id:'toyota-axio-2016',make:'Toyota',model:'Corolla Axio',trim:'Compact sedan',year:2016,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Compact sedan',featured:false,status:'Available',location:'Kigali',image:'photo-1623869675781-80aa31012a5a'},
  {id:'toyota-hiace-2017',make:'Toyota',model:'HiAce',trim:'Passenger van',year:2017,price:0,transmission:'Manual',fuel:'Diesel',mileage:'Contact for details',category:'Van / Minibus',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-corolla-cross-2022',make:'Toyota',model:'Corolla Cross',trim:'Hybrid crossover',year:2022,price:0,transmission:'Automatic',fuel:'Hybrid',mileage:'Contact for details',category:'Hybrid / Crossover',featured:false,status:'Available',location:'Kigali',image:'photo-1606664515524-ed2f786a0bd6'},
  {id:'subaru-forester-2017',make:'Subaru',model:'Forester',trim:'AWD SUV',year:2017,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'SUV / Cross-country',featured:false,status:'Available',location:'Kigali',image:'photo-1606664515524-ed2f786a0bd6'},
  {id:'nissan-x-trail-2018',make:'Nissan',model:'X-Trail',trim:'4WD SUV',year:2018,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'SUV / Cross-country',featured:false,status:'Available',location:'Kigali',photo:'https://commons.wikimedia.org/wiki/Special:FilePath/2017-2020_Nissan_X-Trail_20X.jpg?width=960',photoCredit:'Photo: TTTNIS · CC0',photoCreditUrl:'https://commons.wikimedia.org/wiki/File:2017-2020_Nissan_X-Trail_20X.jpg'},
  {id:'honda-cr-v-2018',make:'Honda',model:'CR-V',trim:'SUV',year:2018,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'SUV',featured:false,status:'Available',location:'Kigali',photo:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda_CR-V_Genf_2018.jpg?width=960',photoCredit:'Photo: Alexander Migl · CC BY-SA 4.0',photoCreditUrl:'https://commons.wikimedia.org/wiki/File:Honda_CR-V_Genf_2018.jpg'},
  {id:'mitsubishi-pajero-2016',make:'Mitsubishi',model:'Pajero',trim:'4WD SUV',year:2016,price:0,transmission:'Automatic',fuel:'Diesel',mileage:'Contact for details',category:'SUV / Cross-country',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'suzuki-swift-2018',make:'Suzuki',model:'Swift',trim:'Hatchback',year:2018,price:0,transmission:'Automatic',fuel:'Petrol',mileage:'Contact for details',category:'Hatchback',featured:false,status:'Available',location:'Kigali',image:'photo-1549317661-bd32c8ce0db2'},
  {id:'toyota-hilux-vigo-2013',make:'Toyota',model:'Hilux Vigo',trim:'Double Cab',year:2013,price:26500000,transmission:'Manual',fuel:'Diesel',mileage:'220,000 km',category:'Pickup',featured:true,status:'Available',location:'Kigali',image:'photo-1621007947382-bb3c3994e3fb'},
  {id:'toyota-yaris-2007',make:'Toyota',model:'Yaris',trim:'Hatchback',year:2007,price:5000000,transmission:'Automatic',fuel:'Petrol',mileage:'220,000 km',category:'Hatchback',featured:false,status:'Available',location:'Kigali',image:'photo-1549317661-bd32c8ce0db2'},
  {id:'toyota-vios-2007',make:'Toyota',model:'Vios',trim:'Sedan',year:2007,price:8700000,transmission:'Automatic',fuel:'Petrol',mileage:'160,000 km',category:'Saloon',featured:false,status:'Available',location:'Kigali',image:'photo-1623869675781-80aa31012a5a'},
  {id:'neta-u-2021',make:'NETA',model:'U',trim:'Electric SUV',year:2021,price:18500000,transmission:'Automatic',fuel:'Electric',mileage:'60,000 km',category:'Electric',featured:false,status:'Available',location:'Kigali',image:'photo-1593941707882-a5bba14938c7'},
  {id:'toyota-highlander-2022',make:'Toyota',model:'Highlander',trim:'SUV',year:2022,price:40000000,transmission:'Automatic',fuel:'Petrol',mileage:'40,000 km',category:'SUV',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-bz4x-2023',make:'Toyota',model:'bZ4X',trim:'Electric SUV',year:2023,price:35000000,transmission:'Automatic',fuel:'Electric',mileage:'70,159 km',category:'Electric',featured:false,status:'Available',location:'Kigali',image:'photo-1593941707882-a5bba14938c7'},
  {id:'byd-atto-3-2024',make:'BYD',model:'Atto 3',trim:'Electric SUV · Rwanda model',year:2024,price:0,transmission:'Automatic',fuel:'Electric',mileage:'Contact for details',category:'Electric',featured:true,status:'Available',location:'Kigali',photo:'assets/byd-atto-3.jpg'},
  {id:'byd-dolphin-2024',make:'BYD',model:'Dolphin',trim:'Electric hatchback',year:2024,price:0,transmission:'Automatic',fuel:'Electric',mileage:'Contact for details',category:'Electric',featured:false,status:'Available',location:'Kigali',photo:'assets/byd-dolphin.jpg'},
  {id:'honda-ens1-2024',make:'Honda',model:'e:NS1',trim:'Electric SUV',year:2024,price:0,transmission:'Automatic',fuel:'Electric',mileage:'Contact for details',category:'Electric',featured:false,status:'Available',location:'Kigali',photo:'assets/honda-ens1.jpg'},
  {id:'byd-song-plus-ev-2025',make:'BYD',model:'Song Plus EV',trim:'Electric SUV',year:2025,price:0,transmission:'Automatic',fuel:'Electric',mileage:'Contact for details',category:'Electric',featured:false,status:'Available',location:'Kigali',photo:'assets/byd-song-plus-ev.png'}
];
const samplePhotoSources = {
  'toyota-land-cruiser-v8-2016': ['2016 Toyota Land Cruiser 200 4.5 VX V8, 06-01-2024.jpg', 'Ethan Llamas · CC BY-SA 4.0'],
  'toyota-harrier-2018': ['18 Toyota Harrier (XU60) front.jpg', 'Benespit · CC BY-SA 4.0'],
  'toyota-noah-2019': ['Toyota Noah TRD 2019.jpg', 'Jared Cabot · CC BY-SA 4.0'],
  'toyota-corolla-2015': ['2015 Toyota Corolla LE front 5.6.18.jpg', 'Kevauto · CC BY-SA 4.0'],
  'toyota-premio-2014': ['TOYOTA PREMIO T260 201606 01.jpeg', 'Wikimedia Commons contributor · CC BY-SA 4.0'],
  'toyota-axio-2016': ['2016 Toyota Corolla Axio.jpg', 'User3204 · CC BY-SA 4.0'],
  'toyota-hiace-2017': ['Toyota HiAce van (32611704085).jpg', 'dave_7 · CC BY 2.0'],
  'toyota-corolla-cross-2022': ['Toyota Corolla Cross 1.8 G 2021.jpg', 'Ethan Llamas · CC BY-SA 4.0'],
  'subaru-forester-2017': ["'17 Subaru Forester (MIAS '17).jpg", 'Bull-Doser · Public domain'],
  'mitsubishi-pajero-2016': ['Mitsubishi pajero v75w longexceed 1 f.jpg', 'Toyotacoronaexsaloon · CC BY-SA 4.0'],
  'suzuki-swift-2018': ['Suzuki Swift 2018.jpg', 'Davidi Vardi · CC BY-SA 4.0']
};
Object.entries(samplePhotoSources).forEach(([id, [file, credit]]) => {
  const car = defaultVehicles.find(vehicle => vehicle.id === id);
  car.photo = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=960`;
  car.photoCredit = `Photo: ${credit}`;
  car.photoCreditUrl = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`;
});
const inventoryStorageKey = 'obedAutoInventory';
let vehicles;
try {
  const savedInventory = JSON.parse(localStorage.getItem(inventoryStorageKey));
  vehicles = Array.isArray(savedInventory) && savedInventory.length ? savedInventory : defaultVehicles;
  if (Array.isArray(savedInventory)) {
    const newSampleVehicles = defaultVehicles.filter(car => !vehicles.some(savedCar => savedCar.id === car.id) && ['byd-atto-3-2024','byd-dolphin-2024','honda-ens1-2024','byd-song-plus-ev-2025','toyota-land-cruiser-v8-2016','toyota-harrier-2018','toyota-noah-2019','toyota-corolla-2015','toyota-premio-2014','toyota-axio-2016','toyota-hiace-2017','toyota-corolla-cross-2022','subaru-forester-2017','nissan-x-trail-2018','honda-cr-v-2018','mitsubishi-pajero-2016','suzuki-swift-2018'].includes(car.id));
    vehicles.push(...newSampleVehicles);
    if (newSampleVehicles.length) localStorage.setItem(inventoryStorageKey, JSON.stringify(vehicles));
  }
} catch {
  vehicles = defaultVehicles;
}
function saveInventory() { localStorage.setItem(inventoryStorageKey, JSON.stringify(vehicles)); }

const exactPhotoDefaults = new Map(defaultVehicles.filter(car => car.photo).map(car => [car.id, car]));
let updatedSamplePhotos = false;
vehicles.forEach(car => {
  const sample = exactPhotoDefaults.get(car.id);
  if (sample && !car.photo) {
    car.photo = sample.photo;
    car.photoCredit = sample.photoCredit;
    car.photoCreditUrl = sample.photoCreditUrl;
    updatedSamplePhotos = true;
  }
});
if (updatedSamplePhotos) saveInventory();

const grid = document.getElementById('car-grid');
const searchInput = document.getElementById('car-search');
const makeFilter = document.getElementById('make-filter');
const transmissionFilter = document.getElementById('transmission-filter');
const priceFilter = document.getElementById('price-filter');
const savedFilter = document.getElementById('saved-filter');
const savedCount = document.getElementById('saved-count');
const countLabel = document.getElementById('results-count');
const emptyState = document.getElementById('empty-state');
const formatter = new Intl.NumberFormat('en-US');
const liked = new Set(JSON.parse(localStorage.getItem('obedAutoSaved') || '[]'));

vehicles.map(car => car.make).filter((make, index, makes) => makes.indexOf(make) === index).sort().forEach(make => {
  const option = document.createElement('option');
  option.value = make;
  option.textContent = make;
  makeFilter.append(option);
});

function renderCars() {
  const availableVehicles = vehicles.filter(car => car.status !== 'Sold');
  document.getElementById('available-car-total').textContent = availableVehicles.length;
  document.getElementById('electric-car-total').textContent = availableVehicles.filter(car => car.fuel === 'Electric').length;
  const queryTerms = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const maxPrice = Number(priceFilter.value) || Infinity;
  const onlySaved = savedFilter.getAttribute('aria-pressed') === 'true';
  const matches = vehicles.filter(car => {
    const searchable = `${car.make} ${car.model} ${car.trim} ${car.year} ${car.category} ${car.fuel} ${car.transmission} ${car.mileage} ${car.location} ${car.price}`.toLowerCase();
    const withinPrice = maxPrice === Infinity ? true : Number(car.price) > 0 && car.price <= maxPrice;
    const matchesDrive = !transmissionFilter.value || (transmissionFilter.value === 'Electric' ? car.fuel === 'Electric' : car.transmission === transmissionFilter.value);
    return car.status !== 'Sold' && queryTerms.every(term => searchable.includes(term)) && (!makeFilter.value || car.make === makeFilter.value) && matchesDrive && withinPrice && (!onlySaved || liked.has(car.id));
  });

  grid.innerHTML = matches.map(car => `
    <article class="car-card">
      <div class="car-image-wrap">
        <img class="car-image" src="${car.photo || `https://images.unsplash.com/${car.image}?auto=format&fit=crop&w=800&q=78`}" alt="${car.year} ${car.make} ${car.model} ${car.trim}" loading="lazy">
        ${car.photoCredit ? `<a class="photo-credit" href="${car.photoCreditUrl}" target="_blank" rel="noopener noreferrer">${car.photoCredit}</a>` : ''}
        <span class="car-badge ${car.featured ? 'featured' : ''}">${car.featured ? '✳ &nbsp; OUR PICK' : car.category.toUpperCase()}</span>
        <button class="wishlist-button ${liked.has(car.id) ? 'is-saved' : ''}" data-save="${car.id}" aria-label="${liked.has(car.id) ? 'Remove ' + car.model + ' from saved cars' : 'Save ' + car.model}" aria-pressed="${liked.has(car.id)}">${liked.has(car.id) ? '♥' : '♡'}</button>
      </div>
      <div class="car-info">
        <div class="car-make">${car.make.toUpperCase()} &nbsp;·&nbsp; ${car.trim.toUpperCase()}</div>
        <div class="car-title-row"><h3>${car.model}</h3><span class="car-year">${car.year}</span></div>
        <div class="car-price">${Number(car.price) > 0 ? `RWF ${formatter.format(car.price)}` : 'Contact for price'}</div>
        <div class="car-details"><span class="car-detail">${car.transmission}</span><span class="car-detail">${car.fuel}</span><span class="car-detail">${car.mileage}</span><span class="car-detail">${car.location || 'Kigali'}</span></div>
        <button class="car-action" data-inquire="${car.id}" aria-label="Ask us about the ${car.year} ${car.make} ${car.model}">Ask about this car <span>↗</span></button>
      </div>
    </article>`).join('');

  countLabel.textContent = `${String(matches.length).padStart(2, '0')} ${matches.length === 1 ? 'car' : 'cars'}`;
  emptyState.hidden = matches.length > 0;
  grid.hidden = matches.length === 0;
  savedCount.textContent = liked.size;
}

function resetFilters() {
  searchInput.value = '';
  makeFilter.value = '';
  transmissionFilter.value = '';
  priceFilter.value = '';
  savedFilter.setAttribute('aria-pressed', 'false');
  renderCars();
}

grid.addEventListener('click', event => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (liked.has(id)) liked.delete(id); else liked.add(id);
    localStorage.setItem('obedAutoSaved', JSON.stringify([...liked]));
    renderCars();
    return;
  }
  const inquiryButton = event.target.closest('[data-inquire]');
  if (inquiryButton) {
    const car = vehicles.find(vehicle => vehicle.id === inquiryButton.dataset.inquire);
    const priceText = Number(car.price) > 0 ? `listed for RWF ${formatter.format(car.price)}` : 'and would like to know the price';
    const message = encodeURIComponent(`Hi Obed Auto Market! I'm interested in the ${car.year} ${car.make} ${car.model} ${car.trim} ${priceText}. Is it available?`);
    window.open(`https://wa.me/250784326686?text=${message}`, '_blank', 'noopener,noreferrer');
  }
});

searchInput.addEventListener('input', renderCars);
[makeFilter, transmissionFilter, priceFilter].forEach(filter => filter.addEventListener('change', renderCars));
savedFilter.addEventListener('click', () => {
  const showingSaved = savedFilter.getAttribute('aria-pressed') === 'true';
  savedFilter.setAttribute('aria-pressed', String(!showingSaved));
  renderCars();
});
document.getElementById('reset-filters').addEventListener('click', resetFilters);
document.getElementById('empty-reset').addEventListener('click', resetFilters);
document.getElementById('browse-ev').addEventListener('click', () => {
  resetFilters();
  searchInput.value = 'electric';
  renderCars();
});
document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
});
renderCars();

const adminOverlay = document.getElementById('admin-overlay');
const adminLogin = document.getElementById('admin-login');
const adminLoginFeedback = document.getElementById('admin-login-feedback');
const adminDashboard = document.getElementById('admin-dashboard');
const adminRows = document.getElementById('admin-rows');
const vehicleForm = document.getElementById('vehicle-form');
const adminFeedback = document.getElementById('admin-feedback');

function renderAdmin() {
  const available = vehicles.filter(car => car.status !== 'Sold');
  document.getElementById('admin-active-count').textContent = vehicles.length;
  document.getElementById('admin-available-count').textContent = available.length;
  document.getElementById('admin-sold-count').textContent = vehicles.length - available.length;
  document.getElementById('admin-value').textContent = `RWF ${formatter.format(available.reduce((total, car) => total + Number(car.price || 0), 0))}`;
  adminRows.innerHTML = vehicles.map(car => `<tr><td><strong>${car.year} ${car.make} ${car.model}</strong><small>${car.trim || ''} · ${car.location || 'Kigali'}</small></td><td>${Number(car.price) > 0 ? `RWF ${formatter.format(car.price)}` : 'Ask for price'}</td><td>${car.transmission}</td><td><span class="status-pill ${car.status === 'Sold' ? 'status-sold' : ''}">${car.status || 'Available'}</span></td><td><div class="row-actions"><button type="button" data-edit="${car.id}">Edit</button><button type="button" data-toggle="${car.id}">${car.status === 'Sold' ? 'Relist' : 'Mark sold'}</button><button type="button" class="delete-action" data-delete="${car.id}">Delete</button></div></td></tr>`).join('');
}

function closeAdmin() {
  adminOverlay.hidden = true;
  document.body.classList.remove('admin-open');
  vehicleForm.reset();
  vehicleForm.elements.id.value = '';
  document.getElementById('form-title').textContent = 'Add a car';
  document.getElementById('cancel-edit').hidden = true;
}

function showAdminLogin(message = '') {
  adminLogin.hidden = false;
  adminDashboard.hidden = true;
  adminOverlay.querySelector('.admin-panel').setAttribute('aria-labelledby', 'admin-login-title');
  adminLoginFeedback.textContent = message;
}

function showAdminDashboard() {
  adminLogin.hidden = true;
  adminDashboard.hidden = false;
  adminOverlay.querySelector('.admin-panel').setAttribute('aria-labelledby', 'admin-title');
  renderAdmin();
}

async function checkAdminSession() {
  if (!location.hostname.endsWith('.netlify.app')) {
    return {ok: false, message: 'Admin sign in is available on the Netlify website.'};
  }
  try {
    const response = await fetch('/.netlify/functions/admin-auth', {credentials:'same-origin'});
    if (!response.ok) return {ok:false, message:'Admin login service is not available. Please try again later.'};
    return await response.json();
  } catch {
    return {ok:false, message:'Could not reach the admin service. Open obed-auto-market.netlify.app and try again.'};
  }
}

document.getElementById('open-admin').addEventListener('click', async () => {
  if (!location.hostname.endsWith('.netlify.app')) {
    location.assign('https://obed-auto-market.netlify.app/?admin=1');
    return;
  }
  adminOverlay.hidden = false;
  document.body.classList.add('admin-open');
  showAdminLogin('Checking your sign-in…');
  document.querySelector('.main-nav').classList.remove('open');
  document.querySelector('.mobile-menu').setAttribute('aria-expanded', 'false');
  const session = await checkAdminSession();
  if (session.authenticated) showAdminDashboard();
  else showAdminLogin(session.message || 'Enter your admin phone number and password.');
});
document.getElementById('toggle-admin-password').addEventListener('click', event => {
  const password = document.getElementById('admin-password');
  const showPassword = password.type === 'password';
  password.type = showPassword ? 'text' : 'password';
  event.currentTarget.innerHTML = showPassword
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.2A10.7 10.7 0 0112 5c5 0 8.7 4.3 10 7-.4.9-1.1 1.9-2.1 2.9M6.2 6.2C3.8 7.7 2.5 10 2 12c1.3 2.7 5 7 10 7 1.2 0 2.3-.3 3.3-.7"/></svg>';
  event.currentTarget.setAttribute('aria-label', `${showPassword ? 'Hide' : 'Show'} password`);
  event.currentTarget.setAttribute('aria-pressed', String(showPassword));
});
adminLogin.addEventListener('submit', async event => {
  event.preventDefault();
  if (!location.hostname.endsWith('.netlify.app')) {
    location.assign('https://obed-auto-market.netlify.app/?admin=1');
    return;
  }
  const submit = adminLogin.querySelector('button[type="submit"]');
  const form = new FormData(adminLogin);
  submit.disabled = true;
  adminLoginFeedback.textContent = 'Signing in…';
  try {
    const response = await fetch('/.netlify/functions/admin-auth', {
      method:'POST', credentials:'same-origin', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({phone:String(form.get('phone')).replace(/\s+/g,''),password:String(form.get('password'))})
    });
    const result = await response.json();
    if (!response.ok || !result.authenticated) {
      adminLoginFeedback.textContent = result.message || 'Phone number or password is incorrect.';
      return;
    }
    adminLogin.reset();
    showAdminDashboard();
  } catch {
    adminLoginFeedback.textContent = 'Could not reach the admin service. Open obed-auto-market.netlify.app and try again.';
  } finally {
    submit.disabled = false;
  }
});
document.getElementById('cancel-admin-login').addEventListener('click', closeAdmin);
document.getElementById('logout-admin').addEventListener('click', async () => {
  try { await fetch('/.netlify/functions/admin-auth', {method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'logout'})}); } catch {}
  showAdminLogin('You have been signed out.');
});
document.getElementById('close-admin').addEventListener('click', closeAdmin);
document.getElementById('cancel-edit').addEventListener('click', () => {
  vehicleForm.reset(); vehicleForm.elements.id.value = '';
  document.getElementById('form-title').textContent = 'Add a car';
  document.getElementById('cancel-edit').hidden = true;
});
adminOverlay.addEventListener('click', event => { if (event.target === adminOverlay) closeAdmin(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !adminOverlay.hidden) closeAdmin(); });

vehicleForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(vehicleForm);
  const id = formData.get('id') || `${String(formData.get('make')).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${crypto.randomUUID().slice(0, 8)}`;
  const previous = vehicles.find(car => car.id === id);
  const record = {id,make:String(formData.get('make')).trim(),model:String(formData.get('model')).trim(),trim:String(formData.get('trim')).trim(),year:Number(formData.get('year')),price:Number(formData.get('price')),transmission:formData.get('transmission'),fuel:formData.get('fuel'),mileage:String(formData.get('mileage')).trim() || 'Ask for mileage',location:String(formData.get('location')).trim() || 'Kigali',status:formData.get('status'),category:previous?.category || 'Car',featured:previous?.featured || false,image:previous?.image || 'photo-1503376780353-7e6692767b70',...(String(formData.get('photo')).trim() ? {photo:String(formData.get('photo')).trim()} : {})};
  if (previous) vehicles = vehicles.map(car => car.id === id ? record : car); else vehicles = [record,...vehicles];
  saveInventory();
  const option = [...makeFilter.options].find(item => item.value.toLowerCase() === record.make.toLowerCase());
  if (!option) { const makeOption = new Option(record.make,record.make); makeFilter.add(makeOption); }
  vehicleForm.reset(); vehicleForm.elements.id.value = '';
  document.getElementById('form-title').textContent = 'Add a car';
  document.getElementById('cancel-edit').hidden = true;
  adminFeedback.textContent = 'Listing saved on this device.';
  renderAdmin(); renderCars();
  window.setTimeout(() => { adminFeedback.textContent = ''; }, 3000);
});

adminRows.addEventListener('click', event => {
  const editButton = event.target.closest('[data-edit]');
  const toggleButton = event.target.closest('[data-toggle]');
  const deleteButton = event.target.closest('[data-delete]');
  if (editButton) {
    const car = vehicles.find(item => item.id === editButton.dataset.edit);
    if (!car) return;
    for (const field of vehicleForm.elements) if (field.name && Object.hasOwn(car, field.name)) field.value = car[field.name];
    vehicleForm.elements.id.value = car.id;
    document.getElementById('form-title').textContent = `Edit ${car.year} ${car.make} ${car.model}`;
    document.getElementById('cancel-edit').hidden = false;
    vehicleForm.scrollIntoView({behavior:'smooth',block:'start'});
  }
  if (toggleButton) {
    const car = vehicles.find(item => item.id === toggleButton.dataset.toggle);
    if (car) { car.status = car.status === 'Sold' ? 'Available' : 'Sold'; saveInventory(); renderAdmin(); renderCars(); }
  }
  if (deleteButton) {
    vehicles = vehicles.filter(car => car.id !== deleteButton.dataset.delete);
    saveInventory(); renderAdmin(); renderCars();
  }
});

if (location.hostname.endsWith('.netlify.app') && new URLSearchParams(location.search).get('admin') === '1') {
  document.getElementById('open-admin').click();
}
