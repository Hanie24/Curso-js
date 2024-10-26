const client = new Map();

client.set("name", "Hanie");
client.set("type", "premium");
client.set("balance", 5000);

console.log(client.size);

console.log(client.has("name"));

// Obtener un valos
console.log(client.get("name"));

// Eliminar un elemento
client.delete("balance");

// Eliminar todos los elementos
// client.clear();

console.log(client);

const patient = new Map([
  ["name", "patient"],
  ["cuarto", "dos"],
]);

patient.set("otro", "Hanie");

patient.forEach((item, index) => {
  console.log(item, index);
});

console.log(patient);
