const car = [
  { name: "Monitor 27 Pulgadas", price: 500 },
  { name: "Televisión", price: 100 },
  { name: "Tablet", price: 200 },
  { name: "Audifonos", price: 300 },
  { name: "Teclado", price: 400 },
  { name: "Celular", price: 700 },
];

const result = car.every((product) => product.price < 1000);
console.log(result);
