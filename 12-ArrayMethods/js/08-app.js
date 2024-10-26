const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const car = [
  { name: "Monitor 27 Pulgadas", price: 500 },
  { name: "Televisión", price: 100 },
  { name: "Tablet", price: 200 },
  { name: "Audifonos", price: 300 },
  { name: "Teclado", price: 400 },
  { name: "Celular", price: 700 },
];

const months2 = [...months, "Agosto"];

console.log(months2);

const product = { name: "Disco duro", price: 300 };

const car2 = [...car, product];

console.log(car2);
