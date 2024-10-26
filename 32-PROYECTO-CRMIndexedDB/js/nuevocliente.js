(function () {
  let DB;

  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectedDB();

    form.addEventListener("submit", validatedClient);
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

  function validatedClient(e) {
    e.preventDefault();

    // Leer todos lo inputs
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    if (name === "" || email === "" || phone === "" || company === "") {
      printAlert("Todos los campos son obligatorios", "error");

      return;
    }

    // Crear un objeto con la información (object literal)
    const client = {
      name,
      email,
      phone,
      company,
      id: Date.now(),
    };

    createNewClient(client);
  }

  function createNewClient(client) {
    const transaction = DB.transaction(["crm"], "readwrite");

    const objStore = transaction.objectStore("crm");

    objStore.add(client);

    transaction.onerror = function () {
      printAlert("Hubo un error", "error");
    };

    transaction.oncomplete = function () {
      printAlert("El cliente se agrego correrctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
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
})();
