// Explicit Binding
function person(el1, el2) {
  console.log(`Mi nombre es: ${this.name} y escucho ${el1} y ${el2}`);
}

const info = {
  name: "Esa Pinche Morra",
};

const favMusic = ["Ska", "Reggae"];

// person.call(info, favMusic[0], favMusic[1]);
// person.apply(info, favMusic);

const newFunc = person.bind(info, favMusic[0], favMusic[1]);

newFunc();
