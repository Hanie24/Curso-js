const auto = {
  model: "Camaro",
  color: "red",
  year: 1969,
};

// for (let properties in auto) {
//   console.log(`${auto[properties]}`);
// }

for (let [key, value] of Object.entries(auto)) {
  console.log(value, key);
}
