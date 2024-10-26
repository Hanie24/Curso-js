window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const location = premium.getBoundingClientRect();

  if (location.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("El elemento aun no esta visible, da más scrool");
  }
});
