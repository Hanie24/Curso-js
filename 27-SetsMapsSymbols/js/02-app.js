const weakset = new WeakSet();

const client = {
  name: "Hanie",
  balance: "3000",
};

weakset.add(client);

// Comprueba si un valor existe
console.log(weakset.has(client));

// Eliminar un elemento
// weakset.delete(client);

console.log(weakset);
