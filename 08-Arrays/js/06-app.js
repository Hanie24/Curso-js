const cart = [
  { name: "Ventilador", price: 100 },
  { name: "Pantalla", price: 400 },
  { name: "Celular", price: 300 },
  { name: "Tenis", price: 50 },
  { name: "Estufa", price: 600 },
];

const newArray = cart.map(function (product) {
  return `${product.name} - Precio: ${product.price}`;
});

console.log(newArray);
