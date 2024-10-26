const uploadJSONBtn = document.querySelector("#cargarJSON");
uploadJSONBtn.addEventListener("click", getData);

function getData() {
  const url = "data/empleado.json";
  fetch(url)
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((result) => {
      showData(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showData({ empresa, id, nombre, trabajo }) {
  const content = document.querySelector(".contenido");

  content.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}
