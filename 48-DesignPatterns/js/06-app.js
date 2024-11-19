// Mixin
class Person {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
}

const functionPerson = {
  showInformation() {
    console.log(`Nombre: ${this.name}, Email: ${this.email}`);
  },
};

// Añadir funciones Person a la clase de Persona
Object.assign(Person.prototype, functionPerson);

const client = new Person("Hanie", "anabanana@gmial.com");

console.log(client);
client.showInformation();
