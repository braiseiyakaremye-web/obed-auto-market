const defaultVehicles = [
  {id:'toyota-rav4-2020',make:'Toyota',model:'RAV4',trim:'SUV',year:2020,price:3600000,transmission:'Automatic',fuel:'Petrol',mileage:'60,120 km',category:'SUV',featured:true,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'hyundai-tucson-2011',make:'Hyundai',model:'Tucson',trim:'SUV',year:2011,price:10500000,transmission:'Automatic',fuel:'Petrol',mileage:'180,000 km',category:'SUV',featured:false,status:'Available',location:'Kigali',image:'photo-1606664515524-ed2f786a0bd6'},
  {id:'toyota-prado-txl-2017',make:'Toyota',model:'Land Cruiser Prado',trim:'TXL',year:2017,price:50000000,transmission:'Automatic',fuel:'Diesel',mileage:'130,000 km',category:'SUV',featured:true,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-hilux-vigo-2013',make:'Toyota',model:'Hilux Vigo',trim:'Double Cab',year:2013,price:26500000,transmission:'Manual',fuel:'Diesel',mileage:'220,000 km',category:'Pickup',featured:true,status:'Available',location:'Kigali',image:'photo-1621007947382-bb3c3994e3fb'},
  {id:'toyota-yaris-2007',make:'Toyota',model:'Yaris',trim:'Hatchback',year:2007,price:5000000,transmission:'Automatic',fuel:'Petrol',mileage:'220,000 km',category:'Hatchback',featured:false,status:'Available',location:'Kigali',image:'photo-1549317661-bd32c8ce0db2'},
  {id:'toyota-vios-2007',make:'Toyota',model:'Vios',trim:'Sedan',year:2007,price:8700000,transmission:'Automatic',fuel:'Petrol',mileage:'160,000 km',category:'Saloon',featured:false,status:'Available',location:'Kigali',image:'photo-1623869675781-80aa31012a5a'},
  {id:'neta-u-2021',make:'NETA',model:'U',trim:'Electric SUV',year:2021,price:18500000,transmission:'Automatic',fuel:'Electric',mileage:'60,000 km',category:'Electric',featured:false,status:'Available',location:'Kigali',image:'photo-1593941707882-a5bba14938c7'},
  {id:'toyota-highlander-2022',make:'Toyota',model:'Highlander',trim:'SUV',year:2022,price:40000000,transmission:'Automatic',fuel:'Petrol',mileage:'40,000 km',category:'SUV',featured:false,status:'Available',location:'Kigali',image:'photo-1519641471654-76ce0107ad1b'},
  {id:'toyota-bz4x-2023',make:'Toyota',model:'bZ4X',trim:'Electric SUV',year:2023,price:35000000,transmission:'Automatic',fuel:'Electric',mileage:'70,159 km',category:'Electric',featured:false,status:'Available',location:'Kigali',image:'photo-1593941707882-a5bba14938c7'}
];
const inventoryStorageKey = 'obedAutoInventory';
let vehicles;
try {
  const savedInventory = JSON.parse(localStorage.getItem(inventoryStorageKey));
  vehicles = Array.isArray(savedInventory) && savedInventory.length ? savedInventory : defaultVehicles;
} catch {
  vehicles = defaultVehicles;
}
function saveInventory() { localStorage.setItem(inventoryStorageKey, JSON.stringify(vehicles)); }

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
  const query = searchInput.value.trim().toLowerCase();
  const maxPrice = Number(priceFilter.value) || Infinity;
  const onlySaved = savedFilter.getAttribute('aria-pressed') === 'true';
  const matches = vehicles.filter(car => {
    const searchable = `${car.make} ${car.model} ${car.trim} ${car.year} ${car.category} ${car.fuel} ${car.transmission}`.toLowerCase();
    return car.status !== 'Sold' && (!query || searchable.includes(query)) && (!makeFilter.value || car.make === makeFilter.value) && (!transmissionFilter.value || car.transmission === transmissionFilter.value) && car.price <= maxPrice && (!onlySaved || liked.has(car.id));
  });

  grid.innerHTML = matches.map(car => `
    <article class="car-card">
      <div class="car-image-wrap">
        <img class="car-image" src="${car.photo || `https://images.unsplash.com/${car.image}?auto=format&fit=crop&w=800&q=78`}" alt="${car.year} ${car.make} ${car.model} ${car.trim}" loading="lazy">
        <span class="car-badge ${car.featured ? 'featured' : ''}">${car.featured ? '✳ &nbsp; OUR PICK' : car.category.toUpperCase()}</span>
        <button class="wishlist-button ${liked.has(car.id) ? 'is-saved' : ''}" data-save="${car.id}" aria-label="${liked.has(car.id) ? 'Remove ' + car.model + ' from saved cars' : 'Save ' + car.model}" aria-pressed="${liked.has(car.id)}">${liked.has(car.id) ? '♥' : '♡'}</button>
      </div>
      <div class="car-info">
        <div class="car-make">${car.make.toUpperCase()} &nbsp;·&nbsp; ${car.trim.toUpperCase()}</div>
        <div class="car-title-row"><h3>${car.model}</h3><span class="car-year">${car.year}</span></div>
        <div class="car-price">RWF ${formatter.format(car.price)}</div>
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
    const message = encodeURIComponent(`Hi Obed Auto Market! I'm interested in the ${car.year} ${car.make} ${car.model} ${car.trim} listed for RWF ${formatter.format(car.price)}. Is it available?`);
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
const adminRows = document.getElementById('admin-rows');
const vehicleForm = document.getElementById('vehicle-form');
const adminFeedback = document.getElementById('admin-feedback');

function renderAdmin() {
  const available = vehicles.filter(car => car.status !== 'Sold');
  document.getElementById('admin-active-count').textContent = vehicles.length;
  document.getElementById('admin-available-count').textContent = available.length;
  document.getElementById('admin-sold-count').textContent = vehicles.length - available.length;
  document.getElementById('admin-value').textContent = `RWF ${formatter.format(available.reduce((total, car) => total + Number(car.price || 0), 0))}`;
  adminRows.innerHTML = vehicles.map(car => `<tr><td><strong>${car.year} ${car.make} ${car.model}</strong><small>${car.trim || ''} · ${car.location || 'Kigali'}</small></td><td>RWF ${formatter.format(car.price)}</td><td>${car.transmission}</td><td><span class="status-pill ${car.status === 'Sold' ? 'status-sold' : ''}">${car.status || 'Available'}</span></td><td><div class="row-actions"><button type="button" data-edit="${car.id}">Edit</button><button type="button" data-toggle="${car.id}">${car.status === 'Sold' ? 'Relist' : 'Mark sold'}</button><button type="button" class="delete-action" data-delete="${car.id}">Delete</button></div></td></tr>`).join('');
}

function closeAdmin() {
  adminOverlay.hidden = true;
  document.body.classList.remove('admin-open');
  vehicleForm.reset();
  vehicleForm.elements.id.value = '';
  document.getElementById('form-title').textContent = 'Add a car';
  document.getElementById('cancel-edit').hidden = true;
}

document.getElementById('open-admin').addEventListener('click', () => {
  adminOverlay.hidden = false;
  document.body.classList.add('admin-open');
  renderAdmin();
  document.querySelector('.main-nav').classList.remove('open');
  document.querySelector('.mobile-menu').setAttribute('aria-expanded', 'false');
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
