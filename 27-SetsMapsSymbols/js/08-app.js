// Iteradores para Set y Map
const cities = ["New York", "Londres", "Madrid", "Paris"];
const orders = new Set([1234, 4567, 7890, 6013]);
const data = new Map();

data.set("name", "Hanie");
data.set("pet", "gato");

// Entries Iterator
// for (let entry of cities.entries()) {
//   console.log(entry);
// }

// for (let entry of orders.entries()) {
//   console.log(orders);
// }

// for (let entry of data.entries()) {
//   console.log(data);
// }

// Values Iterator
// for (let value of cities.values()) {
//   console.log(value);
// }

// for (let value of orders.values()) {
//   console.log(value);
// }

// for (let value of data.values()) {
//   console.log(value);
// }

// Keys Iterator
// for (let keys of cities.keys()) {
//   console.log(keys);
// }

// for (let keys of orders.keys()) {
//   console.log(keys);
// }

// for (let keys of data.keys()) {
//   console.log(keys);
// }

// Default
for (let city of cities) {
  console.log(city);
}

for (let order of orders) {
  console.log(order);
}

for (let dat of data) {
  console.log(dat);
}
