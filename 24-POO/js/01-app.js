// Class Declaration
class Client {
  // Se pasan los valores del objeto una vez que es instanciado
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  //   Método
  showInformation() {
    return `Cliente: ${this.name}, Saldo: ${this.balance}`;
  }

  //   Propiedades estáticas no requieren ser instanciadas
  static welcome() {
    return `Bienvenido al cajero`;
  }
}

// Herencia
class Company extends Client {
  constructor(name, balance, phone, category) {
    // Va a ir a la clase padre y va a buscar los atributos que se pasen en super
    super(name, balance);
    this.phone = phone;
    this.category = category;
  }

  //   Reescribir el método
  static welcome() {
    return `Bienvenido al cajero de empresas`;
  }
}

// Intanciar la clase
const person = new Client("Hanie", 2000);
const company = new Company("Lolo", 6000, 2345678910, "Tecnología");
console.log(company.showInformation());
console.log(person.showInformation());
console.log(Client.welcome());
console.log(Company.welcome());

// Class Expression
const Client2 = class {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
};

const person2 = new Client("Angie", 3000);
console.log(person2);
