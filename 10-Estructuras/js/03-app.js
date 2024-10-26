const user = true;
const canYouPay = false;

console.log(user ? "Si esta autenticado" : "No esta autenticado");

// Revisar dos condiciones con operadores ternarios
console.log(user && canYouPay ? "Si esta autenticado" : "No esta autenticado");
console.log(user || canYouPay ? "Si esta autenticado" : "No esta autenticado");

// If anidado dentro de ternario
console.log(
  user
    ? canYouPay
      ? "Si esta autenticado y puede pagar"
      : "Si esta autenticado pero, no puede pagar"
    : "No esta autenticado"
);
