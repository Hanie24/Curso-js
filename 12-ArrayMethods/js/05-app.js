const car = [
  { name: "Monitor 27 Pulgadas", price: 500 },
  { name: "Televisión", price: 100 },
  { name: "Tablet", price: 200 },
  { name: "Audifonos", price: 300 },
  { name: "Teclado", price: 400 },
  { name: "Celular", price: 700 },
];

const result = car.find((product) => product.name === "Tablet");
console.log(result);
