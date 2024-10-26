const car = new Set();

car.add("Camisa");
car.add("Guitarra");

console.log(car.size);

// Comprueba si un valor existe
console.log(car.has("Camisa"));

// Eliminar un elemento
// car.delete("Camisa");

// Eliminar todos los elementos
// car.clear();

car.forEach((item) => {
  console.log(item);
});

console.log(car);

// Del siguiente arreglo elimina los elementos duplicados
const numbers = [10, 20, 30, 40, 50, 40, 30, 20, 10];

const removeDuplicateItems = new Set(numbers);

console.log(removeDuplicateItems);
