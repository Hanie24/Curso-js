// Pure Functions
const duplicate = (num) => num * 2;

// Toma un número y retorna un número
const result = duplicate(5);

console.log(result);

// No modifican un valor original
const num1 = 10;

const result2 = duplicate(num1);

console.log(result2);

// num1 siempre será igual a 10
console.log(num1);
