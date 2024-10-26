"use strict";

const product = {
  name: "Ana",
  price: "28",
  stock: true,
  information: {
    measures: {
      weight: "1kg",
      dimension: "1m",
    },
    manufacturing: {
      contry: "China",
    },
  },
};

Object.seal(product); //implide agregar nuevas propiedades o eliminarlas pero, permite cambiar los valores de las propiedades existentes

product.stock = false;

console.log(product);
