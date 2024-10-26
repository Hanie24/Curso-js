const productJSON = localStorage.getItem("product");
// Convierte un string en un objeto o arreglo, siempre que tenga la forma adecuada
console.log(JSON.parse(productJSON));
