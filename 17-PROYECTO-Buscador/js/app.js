// Variables
const year = document.querySelector("#year");
const minimum = document.querySelector("#minimo");
const maximum = document.querySelector("#maximo");
const doors = document.querySelector("#puertas");
const transmission = document.querySelector("#transmision");
const color = document.querySelector("#color");
const brand = document.querySelector("#marca");

// Contenedor para los resultados
const result = document.querySelector("#resultado");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generar un objeto con la busqueda
const dataSearch = {
  marca: "",
  minimo: "",
  maximo: "",
  year: "",
  puertas: "",
  transmision: "",
  color: "",
  //   precio: "",
  //   modelo: "",
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  // Muestra los carros al cargar
  showCars(autos);

  // Llena las opciones de años
  fillSelect();
});

// Event listener para los select de búsueda
brand.addEventListener("change", (e) => {
  dataSearch.marca = e.target.value;

  filterCar();
});

year.addEventListener("change", (e) => {
  dataSearch.year = e.target.value;

  filterCar();
});

minimum.addEventListener("change", (e) => {
  dataSearch.minimo = e.target.value;

  filterCar();
});
maximum.addEventListener("change", (e) => {
  dataSearch.maximo = e.target.value;

  filterCar();
});
doors.addEventListener("change", (e) => {
  dataSearch.puertas = e.target.value;

  filterCar();
});
transmission.addEventListener("change", (e) => {
  dataSearch.transmision = e.target.value;

  filterCar();
});
color.addEventListener("change", (e) => {
  dataSearch.color = e.target.value;

  filterCar();
});

// Funciones
function showCars(autos) {
  //  Elimina el HTML previo
  cleanHTML();

  autos.forEach((car) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = car;
    const carHTML = document.createElement("P");

    carHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

    // Insertar en el HTML
    result.appendChild(carHTML);
  });
}

// Limpiar HTML
function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

// Genera los años del select
function fillSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    // Agrega las opciones de año al select
    year.appendChild(option);
  }
}

// Funcion que filtra en base a la búsqueda (son funciones de alto nivel por que tiene otra funcion como parametro)
function filterCar() {
  const result = autos
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterMin)
    .filter(filterMax)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor);

  if (result.length) {
    showCars(result);
  } else {
    noResults();
  }
}

function filterBrand(car) {
  const { marca } = dataSearch;
  if (marca) {
    return car.marca === marca;
  }
  return car;
}

function filterYear(car) {
  const { year } = dataSearch;
  if (year) {
    return car.year === parseInt(year);
  }
  return car;
}

function filterMin(car) {
  const { minimo } = dataSearch;
  if (minimo) {
    return car.precio >= minimo;
  }
  return car;
}

function filterMax(car) {
  const { maximo } = dataSearch;
  if (maximo) {
    return car.precio <= maximo;
  }
  return car;
}

function filterDoors(car) {
  const { puertas } = dataSearch;
  if (puertas) {
    return car.puertas === parseInt(puertas);
  }
  return car;
}

function filterTransmission(car) {
  const { transmision } = dataSearch;
  if (transmision) {
    return car.transmision === transmision;
  }
  return car;
}

function filterColor(car) {
  const { color } = dataSearch;
  if (color) {
    return car.color === color;
  }
  return car;
}

function noResults() {
  cleanHTML();

  const noResults = document.createElement("div");
  noResults.classList.add("error", "alerta");
  noResults.textContent = "No hay resultados, intenta con otra búsqueda";
  result.appendChild(noResults);
}
