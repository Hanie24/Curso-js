const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const months2 = ["Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const month3 = months.concat(months2);

// console.log(month3);

//Spread Operator
const result2 = [...months, ...months2];

console.log(result2);
