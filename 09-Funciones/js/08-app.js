const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet ", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
];

const nuevoArray = carrito.map(
  (product) => `Articulo: ${product.nombre} Precio: $${product.precio} `
);

carrito.forEach((product) =>
  console.log(`Articulo: ${product.nombre} Precio: $${product.precio} `)
);

console.log(nuevoArray);
