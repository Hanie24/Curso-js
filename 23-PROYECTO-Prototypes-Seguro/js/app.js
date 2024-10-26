const form = document.querySelector("#cotizar-seguro");

// Constructor
function Assured(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}

// Realizar la cotización con los datos
Assured.prototype.quoteInsurance = function () {
  /*
          1 = americano 1.15
          2 = asiatico 1.05
          3 = europeo 1.35
    */

  let amount;
  const base = 2000;
  switch (this.brand) {
    case "1":
      amount = base * 1.15;
      break;
    case "2":
      amount = base * 1.05;
      break;
    case "3":
      amount = base * 1.35;
      break;
  }

  //   Leer el año
  const difference = new Date().getFullYear() - this.year;

  //   El costo se reducira un 3% por cada años
  amount -= (difference * 3 * amount) / 100;

  /*
          Si el seguro es básico se múltiplica por 30% mas
          Si el seguro es completo 50% mas
     */
  if (this.type === "basico") {
    amount *= 1.3;
  } else {
    amount *= 1.5;
  }
  return amount;
};

function UI() {}

// Llenar las opciones de los años
UI.prototype.fillOptions = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// Mostrar alertas en pantalla
UI.prototype.showAlert = (message, type) => {
  const divMessaje = document.createElement("div");

  if (type === "error") {
    divMessaje.classList.add("error");
  } else {
    divMessaje.classList.add("correcto");
  }

  divMessaje.classList.add("mensaje", "mt-10");
  divMessaje.textContent = message;

  //   Insertar en el HTML
  form.insertBefore(divMessaje, document.querySelector("#resultado"));

  //   Remover mensaje
  setTimeout(() => {
    divMessaje.remove();
  }, 3000);
};

UI.prototype.showResult = (total, assured) => {
  const { brand, year, type } = assured;

  let textBrand;
  switch (brand) {
    case "1":
      textBrand = "Americano";
      break;
    case "2":
      textBrand = "Asiatico";
      break;
    case "3":
      textBrand = "Europeo";
      break;
  }
  // Crear el resultado
  const divResult = document.createElement("div");
  divResult.classList.add("mt-10");
  // Insertar la informacion
  divResult.innerHTML = `
          <p class='header'>Tu Resumen: </p>
          <p class="font-bold">Marca: <span class="font-normal"> ${textBrand} </span> </p>
          <p class="font-bold">Año: <span class="font-normal"> ${year} </span> </p>
          <p class="font-bold">Tipo: <span class="font-normal"> ${type} </span> </p>
          <p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>
     `;

  const result = document.querySelector("#resultado");

  //   Mostrar spinner
  const spinner = document.querySelector("#cargando");
  spinner.style.display = "block";

  //   Ocultar spinner
  setTimeout(() => {
    // Se borra el spinner
    spinner.style.display = "none";

    // Se muestra el resultado
    result.appendChild(divResult);
  }, 3000);
};

// Instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
  // Llena el select con los años
  ui.fillOptions();
});

eventListener();
function eventListener() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //   Marca seleccionada
    const brand = document.querySelector("#marca").value;
    console.log("brand", brand);

    // Años seleccionado
    const year = document.querySelector("#year").value;
    console.log("año", year);

    // Tipo de cobertura
    const type = document.querySelector('input[name="tipo"]:checked').value;
    console.log("tipo", type);

    if (brand === "" || year === "" || type === "") {
      ui.showAlert("Todos los campos son obligatorios", "error");
      return;
    }

    ui.showAlert("Cotizando...", "exito");

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector("#resultado div");
    if (resultados != null) {
      resultados.remove();
    }

    //   Instancioar el seguro
    const assured = new Assured(brand, year, type);
    const total = assured.quoteInsurance();

    // Utilizar el prototype que va a utilizar
    ui.showResult(total, assured);
  });
}
