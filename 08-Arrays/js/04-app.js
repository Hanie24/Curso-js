const car = [];

const product = {
  name: "Auto",
  price: 28000,
};

const product2 = {
  name: "Monitos",
  price: 500,
};

let newProduct;

newProduct = [...car, product];
newProduct = [...newProduct, product2];

console.log(newProduct);
