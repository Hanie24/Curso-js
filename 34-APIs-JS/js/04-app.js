const openScreen = document.querySelector("#abrir-pantalla-completa");
const closeScreen = document.querySelector("#salir-pantalla-completa");

openScreen.addEventListener("click", openScreenComplete);
closeScreen.addEventListener("click", closeScreenComplete);

function openScreenComplete() {
  document.documentElement.requestFullscreen();
}
function closeScreenComplete() {
  document.exitFullscreen();
}
