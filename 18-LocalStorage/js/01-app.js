localStorage.setItem("nombre", "Juan");

const product = {
  name: "Monitor 24' pulgadas",
  price: 350,
};

const productString = JSON.stringify(product);
localStorage.setItem("product", productString);

const month = ["Octubre", "Noviembre", "Diciembre"];
const monthString = JSON.stringify(month);
localStorage.setItem("month", monthString);
