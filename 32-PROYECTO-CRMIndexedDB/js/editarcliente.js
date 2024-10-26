(function () {
  let DB;
  let idClient;

  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const companyInput = document.querySelector("#empresa");

  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", function () {
    conectedDB();

    // Actualiza el registro cuando se edita la información del cliente
    form.addEventListener("submit", updateClient);

    // Verificar el ID de la URL del cliente
    const parametersURL = new URLSearchParams(window.location.search);

    idClient = parametersURL.get("id");

    if (idClient) {
      setTimeout(() => {
        getClient(idClient);
      }, 1000);
    }
  });

  function conectedDB() {
    const openConection = window.indexedDB.open("crm", 1);

    openConection.onerror = function () {
      console.log("Hubo un error al conectar la base de datos");
    };

    openConection.onsuccess = function () {
      DB = openConection.result;
    };
  }

  function updateClient(e) {
    e.preventDefault();

    if (
      nameInput.value === "" ||
      emailInput === "" ||
      phoneInput === "" ||
      companyInput === ""
    ) {
      printAlert("Todos los campos son obligatorios", "error");

      return;
    }

    // Actualizar cliente
    const updatedClient = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: Number(idClient),
    };

    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.put(updatedClient);

    transaction.oncomplete = function () {
      printAlert("Editado correctamente");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };

    transaction.onerror = function () {
      printAlert("Hubo un error", "error");
    };
  }

  function printAlert(message, type) {
    const alert = document.querySelector(".alert");

    if (!alert) {
      // Crear la alerta
      const divMessage = document.createElement("div");
      divMessage.classList.add(
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center",
        "alert"
      );

      if (type === "error") {
        divMessage.classList.add(
          "bg-red-100",
          "border-red-400",
          "text-red-700"
        );
      } else {
        divMessage.classList.add(
          "bg-green-100",
          "border-green-400",
          "text-green-700"
        );
      }

      divMessage.textContent = message;

      form.appendChild(divMessage);

      setTimeout(() => {
        divMessage.remove();
      }, 3000);
    }
  }

  function getClient(id) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    const client = objectStore.openCursor();
    client.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          fillOutForm(cursor.value);
        }

        cursor.continue();
      }
    };
  }

  function fillOutForm(dataClient) {
    const { name, email, phone, company } = dataClient;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
  }
})();
