// Eliminar elementos de LocalStorage
localStorage.removeItem("nombre");

// Actualizar
const monthsArray = JSON.parse(localStorage.getItem("month"));
monthsArray.push("Enero");
localStorage.setItem("month", JSON.stringify(monthsArray));

// Limpia todo lo que hay en localStorage
localStorage.clear();
