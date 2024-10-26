const car = document.querySelector("#carrito");
const containerCar = document.querySelector("#lista-carrito tbody");
const emptyCart = document.querySelector("#vaciar-carrito");
const courseList = document.querySelector("#lista-cursos");

let itemsInCart = [];

loadEventListeners();
function loadEventListeners() {
  //cuando agregas un curso presionando "Agregar al carrito"
  courseList.addEventListener("click", addCourse);

  // Eliminar cursos del carrito
  car.addEventListener("click", deleteCourse);

  // Muestra los cursos desde Local Storage
  document.addEventListener("DOMContentLoaded", () => {
    itemsInCart = JSON.parse(localStorage.getItem("car")) || [];

    carHTML();
  });

  // Vaciar el carrito
  emptyCart.addEventListener("click", () => {
    itemsInCart = []; //resetea el arreglo

    clearHTML(); // Elimina todo el HTML
  });
}

//Funciones
function addCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const selectedCourse = e.target.parentElement.parentElement;
    readDataCourses(selectedCourse);
  }
}

// Funcion para eliminar curso del carrito
function deleteCourse(e) {
  if (e.target.classList.contains("borrar-curso")) {
    // Eliminar del arreglo de itemsInCart por el data-id
    const courseId = e.target.getAttribute("data-id");
    itemsInCart = itemsInCart.filter((course) => course.id !== courseId);

    carHTML(); // Iterar sobre el carrito y mostrar su HTML
  }
}

//  Lee el contenido del HTML al que le dimos click y extrae la información del curso
function readDataCourses(course) {
  //Crear un objeto dentro del curso actual
  const infoCourse = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };

  // Revisa si un elemento ya existe en el carrito
  const exist = itemsInCart.some((course) => course.id === infoCourse.id);
  if (exist) {
    // Actualizar la cantidad de elementos en el carrito
    const courses = itemsInCart.map((course) => {
      if (course.id === infoCourse.id) {
        course.quantity++;
        return course; //Retorna el obj actualizado
      } else {
        return course; //Retorna los elementos que nos estan duplicados
      }
    });
  } else {
    // Agregar elemeentos al array del carrito
    itemsInCart = [...itemsInCart, infoCourse];
  }

  carHTML();
}

//Muestra el carrito de compras en el HTML
function carHTML() {
  // Limpia el HTML
  clearHTML();

  // Recorre el carrito y genera el HTML
  itemsInCart.forEach((course) => {
    const { image, title, price, quantity, id } = course;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${image}" width="100"/>
      </td>
      <td>${title}</td>
      <td>${price}</td>
      <td>${quantity}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>

    `;

    // Agregar el HTML del carrito en el tbody
    containerCar.appendChild(row);

    // Storage
    synchronizeStorage();
  });
}

function synchronizeStorage() {
  localStorage.setItem("car", JSON.stringify(itemsInCart));
}

// Eliminar los cursos del tbody
function clearHTML() {
  // Forma lenta
  // containerCar.innerHTML = "";

  while (containerCar.firstChild) {
    containerCar.removeChild(containerCar.firstChild);
  }
}
