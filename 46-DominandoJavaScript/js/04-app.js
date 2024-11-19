// Implicit Binding
const user = {
  name: "Ana",
  age: 31,
  info() {
    console.log(`Mi nombre es ${this.name}, tengo ${this.age} años`);
  },
  pet: {
    name: "Sam",
    info() {
      console.log(`Mi mascota se llama ${this.name}`);
    },
  },
};

user.info();
user.pet.info();
