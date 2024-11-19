// Singleton

let instance = null;

class Person {
  constructor(name, email) {
    if (!instance) {
      this.name = name;
      this.email = email;
      instance = this;
    } else {
      return instance;
    }
  }
}

const person = new Person("Hanie", "hanie@gmail.com");

console.log(person);
