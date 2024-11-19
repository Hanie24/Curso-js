console.log("Primero");

setTimeout(function () {
  console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(function () {
  console.log("Cuarto ");
}, 0);

new Promise(function (resolve) {
  resolve("Quinto ");
}).then(console.log);

console.log("Sexto!");
