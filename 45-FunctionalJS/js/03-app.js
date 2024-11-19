// Separar datos de las funciones

const car = [
  { name: "Monitor 20 Pulgadas", price: 500 },
  { name: "Televisión 50 Pulgadas", price: 700 },
  { name: "Tablet", price: 300 },
  { name: "Audifonos", price: 200 },
  { name: "Teclado", price: 50 },
  { name: "Celular", price: 500 },
  { name: "Bocinas", price: 300 },
  { name: "Laptop", price: 800 },
];

// const result = car.filter((item) => {
//   return item.price > 400;
// });

// console.log(result);

// Funciones como argumentos

const greaterThan400 = (item) => {
  return item.price > 400;
};

// Se esta creando un nuevo array
const result = car.filter(greaterThan400);

console.log(result);
