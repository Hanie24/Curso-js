const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const car = [
  { name: "Monitor 27 Pulgadas", precio: 500 },
  { name: "Televisión", precio: 100 },
  { name: "Tablet", precio: 200 },
  { name: "Audifonos", precio: 300 },
  { name: "Teclado", precio: 400 },
  { name: "Celular", precio: 700 },
];

const result = months.includes("Enero");
console.log("array", result);

const exist = car.some((product) => product.name === "Televisión");

console.log("array obj", exist);
