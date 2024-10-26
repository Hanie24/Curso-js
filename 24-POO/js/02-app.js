// Class Declaration
class Client {
  // Crear propiedades privadas
  // Solo se puede acceder desde la clase con otro atributo con un get o modificarlo con un set, desde algun constructor o algún otro meétodos
  #name;
  constructor(name, balance) {
    this.#name = name;
    this.balance = balance;
  }

  //   Método
  showInformation() {
    return `Cliente: ${this.#name}, Saldo: ${this.balance}`;
  }

  //   Propiedades estáticas no requieren ser instanciadas
  static welcome() {
    return `Bienvenido al cajero`;
  }
}

const person = new Client("Hanie", 2000);
console.log(person.showInformation());
// Esto marcará un erro por que la propiedad es privada
// console.log(person.#name);
