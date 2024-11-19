// Funciones como argumentos

const sum = (a, b) => a + b;

const multiplication = (a, b) => a * b;

const sumOrMultiplication = (func) => func(10, 5);

console.log("suma", sumOrMultiplication(sum));
console.log("multiplicacion", sumOrMultiplication(multiplication));
