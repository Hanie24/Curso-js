const uploadJSONArrayBtn = document.querySelector("#cargarJSONArray");
uploadJSONArrayBtn.addEventListener("click", getData);

function getData() {
  const url = "data/empleados.json";
  fetch(url)
    .then((response) => response.json())
    .then((result) => showData(result));
}

function showData(empleados) {
  const content = document.querySelector(".contenido");

  let html = "";

  empleados.forEach((empleado) => {
    const { id, nombre, empresa, trabajo } = empleado;

    html += `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;

    content.innerHTML = html;
  });
}
