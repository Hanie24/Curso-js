const product = {
  name: "Libro",
  price: "28",
  stock: true,
  showInformation: function () {
    console.log(`El ${this.name} tiene un precio de $${this.price}.00 pesos`);
  },
};

product.showInformation();
