// class pattern
class Person {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
}

const person = new Person("Hanie", "hanie@gmail.com");

console.log(person);
