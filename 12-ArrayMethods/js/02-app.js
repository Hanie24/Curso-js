const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const car = [
  { name: "Monitor 27 Pulgadas", precio: 500 },
  { name: "Televisión", precio: 100 },
  { name: "Tablet", precio: 200 },
  { name: "Audifonos", precio: 300 },
  { name: "Teclado", precio: 400 },
  { name: "Celular", precio: 700 },
];

// const index = months.findIndex((month) => month === "Febrero");
// console.log(index);

const index = car.findIndex((prod) => prod.name === "Teclado");
console.log(index);
