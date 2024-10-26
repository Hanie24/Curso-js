function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

Client.prototype.typeClient = function () {
  let tipo;
  if (this.balance > 10000) {
    tipo = "Gold";
  } else if (this.balance > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Client.prototype.nameClient = function () {
  return `Nombre: ${this.name}, Saldo ${
    this.balance
  }, Tipo Cliente:  ${this.typeClient()} `;
};

Client.prototype.withdrawBalance = function (withdraw) {
  this.balance -= withdraw;
};

function Person(name, balance, phone) {
  Client.call(this, name, balance);
  this.phone = phone;
}

Person.prototype = Object.create(Client.prototype);
Person.prototype.constructor = Client;

const newPerson = new Person("Paquita", 8000, 5647819238);
console.log(newPerson);
