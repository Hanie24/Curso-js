// Currying y Partials

const sum = (a, b, c) => a + b + c;

const partial = (a) => (b) => (c) => sum(a, b, c);

// const numberOne = partial(3);
// const numberTwo = numberOne(5);
// const result = numberTwo(2);
// console.log(result);

const resultPartian = partial(3)(5)(2);

console.log(resultPartian);
