const product = {
  name: "Ana",
  price: "28",
  stock: true,
};

const measures = {
  weight: "1kg",
  dimension: "1m",
};

const result = Object.assign(product, measures); //crea un nuevo objeto a partir de los exsitentes

// console.log(result);

//Spreat operator
const result2 = { ...product, ...measures };

console.log(result2);
