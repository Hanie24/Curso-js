const cart = [
  { name: "Ventilador", price: 100 },
  { name: "Pantalla", price: 400 },
  { name: "Celular", price: 300 },
  { name: "Tenis", price: 50 },
  { name: "Estufa", price: 600 },
];

cart.forEach(function (product) {
  console.log(`${product.name} - Precio: ${product.price}`);
});
