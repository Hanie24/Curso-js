(function () {
  let DB;

  const listClients = document.querySelector("#listado-clientes");

  //   Cuando este cargado el contenido se llamara a la función creareDB
  document.addEventListener("DOMContentLoaded", () => {
    createDB();

    if (window.indexedDB.open("crm", 1)) {
      getClients();
    }

    listClients.addEventListener("click", deleteRegister);
  });

  // Eliminar Registro
  function deleteRegister(e) {
    if (e.target.classList.contains("delete")) {
      const idDelete = Number(e.target.dataset.cliente);

      const prove = confirm("Deseas eliminar este cliente");

      if (prove) {
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStores = transaction.objectStore("crm");

        objectStores.delete(idDelete);

        transaction.oncomplete = function () {
          e.target.parentElement.parentElement.remove();
        };

        transaction.onerror = function () {
          console.log("hubo un error...");
        };
      }
    }
  }

  // Crear la base de datos
  function createDB() {
    // Abrir conexión
    const createDB = window.indexedDB.open("crm", 1);

    createDB.onerror = function () {
      console.log("Hubo un error");
    };

    createDB.onsuccess = function () {
      DB = createDB.result;
    };

    createDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      //   el id se va a utilizar para actualizar o eliniar registros
      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      //createindex, nombre y keypath, 3ro los parametros
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("phone", "phone", { unique: false });
      objectStore.createIndex("company", "company", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("Database creada y lista");
    };
  }

  //   Obtener clientes READ
  function getClients() {
    const openConection = window.indexedDB.open("crm", 1);

    openConection.onerror = function () {
      console.log("Hubo un error");
    };

    openConection.onsuccess = function () {
      DB = openConection.result;

      const objStore = DB.transaction("crm").objectStore("crm");

      objStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;

        if (cursor) {
          const { name, email, phone, company, id } = cursor.value;

          listClients.innerHTML += `

                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${phone}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${company}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 delete">Eliminar</a>
                            </td>
                        </tr>
                    `;

          cursor.continue();
        } else {
          console.log("No hay más registros");
        }
      };
    };
  }
})();
