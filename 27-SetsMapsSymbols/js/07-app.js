function* createGenerator() {
  yield 1;
  yield "Hanie";
  yield 3 + 3;
  yield false;
}

// const interator = createGenerator();

// console.log(interator);
// console.log(interator.next().value);
// console.log(interator.next().value);
// console.log(interator.next().value);
// console.log(interator.next().value);
// console.log(interator.next());
// console.log(interator);

// Generador para carrito de compras

function* createCar(car) {
  for (let i = 0; i < car.length; i++) {
    yield car[i];
  }
}

const car = ["producto1", "producto2", "producto3"];

const interator = createCar(car);

console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
