const container = document.querySelector(".container");
const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
  e.preventDefault();

  //   Validar
  const city = document.querySelector("#ciudad").value;
  const country = document.querySelector("#pais").value;

  if (city === "" || country === "") {
    showError("Ambos campos son obligatorios");

    return;
  }

  //   Consultar el API
  consultAPI(city, country);
}

function showError(message) {
  const alert = document.querySelector(".alert");

  if (!alert) {
    //   Crear una alerta
    const alert = document.createElement("div");

    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center",
      "alert"
    );

    alert.innerHTML = `
  <strong class="font-bold">Error!</strong>
  <span class="block">${message}</span>
  `;

    container.appendChild(alert);

    //   Eliminar la alert después de 5seg

    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}

function consultAPI(city, country) {
  const apiKey = "1950534327d1a8ca03b1745b6412f3a6";

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

  //   Muestra el spinner
  spinner();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Limpiar HTML previo
      cleanHTML();
      if (data.cod === "404") {
        showError("Ciudad no encontrada");
        return;
      }

      //   Imprime la respuesta en el HTML
      showWeather(data);
    });
}

function showWeather(data) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  //   Conversion de grados Kelvin a Centigrados
  const celsius = kelvinToCelsius(temp);
  const max = kelvinToCelsius(temp_max);
  const min = kelvinToCelsius(temp_min);

  const nameCity = document.createElement("p");
  nameCity.textContent = `${name}`;
  nameCity.classList.add("font-bold", "text-2xl");

  const currentTemperature = document.createElement("p");
  currentTemperature.innerHTML = `${celsius} &#8451;`;
  currentTemperature.classList.add("font-bold", "text-6xl");

  const tempMax = document.createElement("p");
  tempMax.innerHTML = `Max: ${max} &#8451;`;
  tempMax.classList.add("text-xl");

  const tempMin = document.createElement("p");
  tempMin.innerHTML = `Min: ${min} &#8451;`;
  tempMin.classList.add("text-xl");

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("text-center", "text-white");
  resultDiv.appendChild(nameCity);
  resultDiv.appendChild(currentTemperature);
  resultDiv.appendChild(tempMax);
  resultDiv.appendChild(tempMin);

  result.appendChild(resultDiv);
}

const kelvinToCelsius = (grados) => parseInt(grados - 273.15);

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function spinner() {
  cleanHTML();

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

  result.appendChild(divSpinner);
}
