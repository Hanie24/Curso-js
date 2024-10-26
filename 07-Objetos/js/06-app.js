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

const {
  information: { manufacturing },
} = product;

console.log(manufacturing);
