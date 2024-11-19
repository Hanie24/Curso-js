// Probar dos valores

function sum(a, b) {
  return a + b;
}

let result = sum(2, 2);
let expected = 3;

if (result !== expected) {
  console.log("La prueba no pasó");
} else {
  console.log("La prueba paso correctamente");
}
