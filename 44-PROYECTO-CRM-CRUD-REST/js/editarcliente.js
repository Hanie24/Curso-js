import { validate, showAlert } from "./funciones.js";
import { getClientForID, updateDataClient } from "./API.js";

(function () {
  // Campos del formulario
  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");
  const companieInput = document.querySelector("#empresa");

  document.addEventListener("DOMContentLoaded", async () => {
    const paramsURL = new URLSearchParams(window.location.search);

    const idClient = paramsURL.get("id");

    const client = await getClientForID(idClient);

    showClient(client);

    const form = document.querySelector("#formulario");
    form.addEventListener("submit", validateClient);
  });

  function showClient(client) {
    const { name, phone, id, companie, email } = client;

    nameInput.value = name;
    phoneInput.value = phone;
    idInput.value = id;
    companieInput.value = companie;
    emailInput.value = email;
  }

  function validateClient(e) {
    e.preventDefault();

    const client = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      companie: companieInput.value,
      id: idInput.value,
    };

    if (validate(client)) {
      showAlert("Todos los campos son obligatorios");

      return;
    }

    // Reescribe el objeto
    updateDataClient(client);
  }
})();
