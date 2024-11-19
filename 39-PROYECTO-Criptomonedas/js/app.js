const selectCrypto = document.querySelector("#criptomonedas");
const selectCoin = document.querySelector("#moneda");
const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");

const objSearch = {
  moneda: "",
  criptomoneda: "",
};

const getCrypto = (crypto) =>
  new Promise((resolve) => {
    resolve(crypto);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultCrypto();

  form.addEventListener("submit", submitForm);

  selectCrypto.addEventListener("change", readValue);
  selectCoin.addEventListener("change", readValue);
});

async function consultCrypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  try {
    const response = await fetch(url);
    const resolve = await response.json();
    const crypto = await getCrypto(resolve.Data);
    selectedCrypto(crypto);
  } catch (error) {
    console.log(error);
  }
}

function selectedCrypto(crypto) {
  crypto.forEach((c) => {
    const { FullName, Name } = c.CoinInfo;

    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;

    selectCrypto.appendChild(option);
  });
}

function readValue(e) {
  objSearch[e.target.name] = e.target.value;
}

function submitForm(e) {
  e.preventDefault();

  //   validar
  const { moneda, criptomoneda } = objSearch;

  if (moneda === "" || criptomoneda === "") {
    showAlert("Ambos campos son obligatorios");
    return;
  }

  //   Consultar el API
  consultAPI();
}

function showAlert(message) {
  const existError = document.querySelector(".error");

  if (!existError) {
    const divMessage = document.createElement("DIV");
    divMessage.classList.add("error");

    divMessage.textContent = message;

    form.appendChild(divMessage);

    setTimeout(() => {
      divMessage.remove();
    }, 3000);
  }
}

async function consultAPI() {
  const { moneda, criptomoneda } = objSearch;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  showSpinner();

  try {
    const response = await fetch(url);
    const resolve = await response.json();
    showPrice(resolve.DISPLAY[criptomoneda][moneda]);
  } catch (error) {
    console.log(error);
  }
}

function showPrice(price) {
  clearHTML();

  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE } = price;

  const priceHTML = document.createElement("P");
  priceHTML.classList.add("precio");
  priceHTML.innerHTML = `El precio es <span>${PRICE}</span>`;

  const highPrice = document.createElement("P");
  highPrice.innerHTML = `<p>El precio mas alto del día es: <span>${HIGHDAY}</span></p>`;

  const lowDay = document.createElement("P");
  lowDay.innerHTML = `<p>El precio mas bajo del día es: <span>${LOWDAY}</span></p>`;

  const change24hours = document.createElement("P");
  change24hours.innerHTML = `<p>El precio en las últimas 24 horas: <span>${CHANGE24HOUR}</span></p>`;

  const lastupdate = document.createElement("P");
  lastupdate.innerHTML = `<p>última actualización: <span>${LASTUPDATE}</span></p>`;

  result.appendChild(priceHTML);
  result.appendChild(highPrice);
  result.appendChild(lowDay);
  result.appendChild(change24hours);
  result.appendChild(lastupdate);
}

function clearHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function showSpinner() {
  clearHTML();

  const spinner = document.createElement("DIV");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
  `;

  result.appendChild(spinner);
}
