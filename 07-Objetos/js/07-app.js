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

Object.freeze(product); //implide modificar el objeto y agregar nuevas propiedades o eliminarlas
console.log(Object.isFrozen(product)); //indica si el objeto esta "congelado"
