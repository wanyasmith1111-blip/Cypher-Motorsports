import { vehicles } from '../data/vehicles.js';

const vehicleList = document.querySelector('#vehicleList');
const vehicleDetail = document.querySelector('#vehicleDetail');
const searchInput = document.querySelector('#searchInput');

let selectedVehicleId = vehicles[0]?.id;

function vehicleSearchText(vehicle) {
  return [
    vehicle.owner,
    vehicle.year,
    vehicle.make,
    vehicle.model,
    vehicle.trim,
    vehicle.nickname,
    vehicle.engine,
    vehicle.mods.map((mod) => `${mod.category} ${mod.name} ${mod.brand}`).join(' ')
  ].join(' ').toLowerCase();
}

function renderVehicleList(items) {
  if (!items.length) {
    vehicleList.innerHTML = '<p class="empty-state">No vehicles found.</p>';
    return;
  }

  vehicleList.innerHTML = items.map((vehicle) => `
    <button class="vehicle-card ${vehicle.id === selectedVehicleId ? 'active' : ''}" data-id="${vehicle.id}">
      <strong>${vehicle.year} ${vehicle.make} ${vehicle.model}</strong>
      <span>${vehicle.nickname} • ${vehicle.owner}</span>
    </button>
  `).join('');

  document.querySelectorAll('.vehicle-card').forEach((button) => {
    button.addEventListener('click', () => {
      selectedVehicleId = button.dataset.id;
      renderApp();
    });
  });
}

function renderVehicleDetail(vehicle) {
  if (!vehicle) {
    vehicleDetail.innerHTML = '<p class="empty-state">Select a vehicle to view specs.</p>';
    return;
  }

  vehicleDetail.innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <div class="badge-row">
          <span class="badge">${vehicle.owner}</span>
          <span class="badge">${vehicle.drivetrain}</span>
          <span class="badge">${vehicle.transmission}</span>
          <span class="badge">${vehicle.fuel}</span>
        </div>
        <h2>${vehicle.nickname}</h2>
        <p>${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}</p>
        <p>${vehicle.description}</p>
      </div>
    </div>

    <div class="detail-body">
      <div class="spec-grid">
        <div class="spec-card"><span>Horsepower</span><strong>${vehicle.horsepower} hp</strong></div>
        <div class="spec-card"><span>Torque</span><strong>${vehicle.torque} lb-ft</strong></div>
        <div class="spec-card"><span>Engine</span><strong>${vehicle.engine}</strong></div>
        <div class="spec-card"><span>Color</span><strong>${vehicle.color}</strong></div>
      </div>

      <section class="section-card">
        <h3>Modification List</h3>
        <div class="mods-grid">
          ${vehicle.mods.map((mod) => `
            <div class="mod-item">
              <strong>${mod.name}</strong><br />
              <span>${mod.category} • ${mod.brand}</span>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

function getFilteredVehicles() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return vehicles;
  return vehicles.filter((vehicle) => vehicleSearchText(vehicle).includes(query));
}

function renderApp() {
  const filteredVehicles = getFilteredVehicles();
  const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedVehicleId) || filteredVehicles[0];

  if (selectedVehicle && !filteredVehicles.some((vehicle) => vehicle.id === selectedVehicle.id)) {
    selectedVehicleId = filteredVehicles[0]?.id;
  }

  renderVehicleList(filteredVehicles);
  renderVehicleDetail(vehicles.find((vehicle) => vehicle.id === selectedVehicleId));
}

searchInput.addEventListener('input', renderApp);
renderApp();
