function createIterator(car) {
  let i = 0;

  return {
    next: () => {
      let finish = i >= car.length;
      let value = !finish ? car[i++] : undefined;

      return {
        finish: finish,
        value: value,
      };
    },
  };
}

const car = ["produto 1", "producto2", "producto3"];

const browseCar = createIterator(car);

console.log(browseCar.next());
console.log(browseCar.next());
console.log(browseCar.next());
console.log(browseCar.next());
console.log(browseCar.next());
