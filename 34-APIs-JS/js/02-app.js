// Permite identificar un objeto una vez que sea vibible en el viewport del navegador, se uliza mucho para aplicar scroll infinito o lazy load

document.addEventListener("DOMContentLoaded", () => {
  // Habilitar la API
  const observer = new IntersectionObserver((entries) => {
    console.log("Ya esta visible"); // console.log(entries[0]);
  });

  //   Elemento que sera observado
  observer.observe(document.querySelector(".premium"));
});
