const uploadAPIBtn = document.querySelector("#cargarAPI");
uploadAPIBtn.addEventListener("click", getData);

function getData() {
  const url = "https://picsum.photos/list";
  fetch(url)
    .then((response) => response.json())
    .then((result) => showData(result));
}

function showData(data) {
  const content = document.querySelector(".contenido");

  let html = "";

  data.forEach((profile) => {
    const { author, post_url } = profile;

    html += `
    <p>Empleado: ${author}</p>
    <a href="${post_url}" target="_blank">Ver imagen</a>
    `;

    content.innerHTML = html;
  });
}
