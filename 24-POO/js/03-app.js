class Client {
  #name;
  constructor(name, balance) {
    this.#name = name;
    this.balance = balance;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const person = new Client();
person.setName("Hanie");
console.log(person.getName());
