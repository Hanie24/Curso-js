function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

Client.prototype.typeClient = function () {
  let type;

  if (this.balance > 10000) {
    type = "Gold";
  } else if (this.balance > 5000) {
    type = "Platino";
  } else {
    type = "Normal";
  }
  return type;
};

// Instanciar el objeto
const newClient = new Client("Juana", 6000);
console.log(newClient.typeClient());
newClient.typeClient();

console.log(newClient);

function Companies(name, balance, categorie) {
  this.name = name;
  this.balance = balance;
  this.categorie = categorie;
}

const companies = new Companies("Maria", 6000, "Maestra");
console.log(companies);
