function sum(a, b) {
  return a + b;
}

async function sumAsync(a, b) {
  return Promise.resolve(sum(a, b));
}

// let result = sum(1, 2);
// let expected = 3;

// expectedFunc(expected).toBe(result);

test("suma", async () => {
  const result = await sumAsync(12, 20);
  const expected = 30;

  expectedFunc(expected).toBe(result);
});

async function test(message, callback) {
  try {
    await callback();
    console.log(`El test: ${message}, se ejecuto correctamente`);
  } catch (error) {
    console.log(error);
  }
}

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
