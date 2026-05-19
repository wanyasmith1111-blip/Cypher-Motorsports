const vehicleList = document.getElementById("vehicleList");
const vehicleDetail = document.getElementById("vehicleDetail");
const searchInput = document.getElementById("searchInput");

function displayVehicles(vehicleArray) {
  vehicleList.innerHTML = "";

  vehicleArray.forEach(vehicle => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" class="vehicle-image">
      <h2>${vehicle.year} ${vehicle.make} ${vehicle.model}</h2>
      <p><strong>Category:</strong> ${vehicle.category}</p>
      <p><strong>Engine:</strong> ${vehicle.engine}</p>
      <p><strong>Horsepower:</strong> ${vehicle.horsepower} hp</p>
      <button onclick="showDetails(${vehicle.id})">View Specs</button>
    `;

    vehicleList.appendChild(card);
  });
}

function showDetails(id) {
  const vehicle = vehicles.find(car => car.id === id);

  vehicleDetail.innerHTML = `
    <h2>${vehicle.year} ${vehicle.make} ${vehicle.model}</h2>
    <p><strong>Category:</strong> ${vehicle.category}</p>
    <p><strong>Engine:</strong> ${vehicle.engine}</p>
    <p><strong>Horsepower:</strong> ${vehicle.horsepower} hp</p>
    <p><strong>Drivetrain:</strong> ${vehicle.drivetrain}</p>
    <p><strong>Transmission:</strong> ${vehicle.transmission}</p>
    <p>${vehicle.description}</p>
  `;
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      vehicle.make.toLowerCase().includes(searchTerm) ||
      vehicle.model.toLowerCase().includes(searchTerm) ||
      vehicle.engine.toLowerCase().includes(searchTerm) ||
      vehicle.drivetrain.toLowerCase().includes(searchTerm) ||
      vehicle.category.toLowerCase().includes(searchTerm)
    );
  });

  displayVehicles(filteredVehicles);
});

displayVehicles(vehicles);
function filterVehicles(category) {
  if (category === "All") {
    displayVehicles(vehicles);
    return;
  }

  const filtered = vehicles.filter(vehicle => {
    return vehicle.category === category;
  });

  displayVehicles(filtered);
}
