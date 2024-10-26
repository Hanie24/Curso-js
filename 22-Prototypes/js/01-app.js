// Literal Object
const client = {
  name: "Juan",
  balance: 300,
};

console.log(client);
console.log(typeof client);

// Object Constructor
function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

const juan = new Client("Ana", 500);

console.log(juan);
