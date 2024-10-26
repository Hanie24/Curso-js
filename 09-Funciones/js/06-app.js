//Funciones que retornan un valor
function sum(a, b) {
  return a + b;
}

const result = sum(7, 3);

console.log(result);

let total = 0;
function addToCar(price) {
  return (total += price);
}

function calculateTax(total) {
  return total * 1.15;
}

total = addToCar(300);

const totaltoPay = calculateTax(total);

console.log(`El total a pagar es de ${totaltoPay}`);

console.log(total);
