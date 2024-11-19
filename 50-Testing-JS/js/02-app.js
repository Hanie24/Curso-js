function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
let expected = 3;

expectedFunc(expected).toBe(result);

function expectedFunc(expected) {
  return {
    toBe(result) {
      if (result !== expected) {
        console.log("La prueba no pasó");
      } else {
        console.log("La prueba paso correctamente");
      }
    },
  };
}
