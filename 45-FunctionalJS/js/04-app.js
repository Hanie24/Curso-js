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

const getNames = (item) => {
  return item.name;
};

const result = car.map(getNames);

console.log(result);
