const product = {
  name: "Libro",
  price: "28",
  stock: false,
};

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.stock = true;
}

const product2 = new Product("Monitor", 500);

console.log(product2);
