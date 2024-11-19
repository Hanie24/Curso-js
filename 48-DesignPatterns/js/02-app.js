// Constructor Patern
class Person {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
}

class Client extends Person {
  constructor(name, email, company) {
    super(name, email);
    this.company = company;
  }
}

const client = new Client("Juanita", "juana@prueba.com", "oye");

console.log(client);
