const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

//Indica cuanto mide el array
console.log("Largo del array", meses.length);

//Iterador
for (let i = 0; i < meses.length; i++) {
  //Devuelve la cantidad de elementos en el array
  console.log("elementos", i);
  //Devuelve el valor del elemento
  console.log("valor", meses[i]);
}
