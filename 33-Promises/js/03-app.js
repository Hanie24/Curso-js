const applyDiscount = new Promise((resolve, reject) => {
  const discount = true;

  if (discount) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar descuento");
  }
});

applyDiscount
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
