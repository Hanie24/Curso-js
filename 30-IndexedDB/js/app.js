let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    createClient();
  }, 5000);
});

function crmDB() {
  // Crear versio 1.0 de la base de datos
  let crmDB = window.indexedDB.open("crm", 1);

  // Si hay un error
  crmDB.onsuccess = function () {
    console.log("Se produjo un error al crear la base de datos");
  };

  // Si se creo bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada");

    DB = crmDB.result;
  };

  // Configuración de la base de datos
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    // Crear columnas de la base de datos y darle configuración
    const objStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    // Definición de las columnas
    objStore.createIndex("name", "name", { unique: false });
    // unique hace referencia a un unico valor aceptado. Por ejemplo, se pueden tener dos usuarios con el mismo nombre pero no con el mismo correo
    objStore.createIndex("email", "email", { unique: true });
    objStore.createIndex("phone", "phone", { unique: true });

    console.log("Columnas creadas!");
  };
}

function createClient() {
  // Transacción (readwrite: escritura y lectura)
  let transaction = DB.transaction(["crm"], "readwrite");

  // Transacción completada
  transaction.oncomplete = function () {
    console.log("transacción completada");
  };

  //   Objeto en la base de datos
  const objStore = transaction.objectStore("crm");

  const newClient = {
    phone: 2323456576,
    name: "Hanie",
    email: "haniee.0324@gmail.com",
  };

  const request = objStore.add(newClient);

  console.log(request);
}
