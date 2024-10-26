function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

const dataClient = new Client("Ana", 500);

function formatClient(client) {
  const { name, balance } = client;
  return `El cliente ${name}, tiene un saldo de: $${balance} pesos`;
}

console.log(formatClient(dataClient));

function Companies(name, balance, category) {
  this.name = name;
  this.balance = balance;
  this.category = category;
}

const companies = new Companies(
  `El cliente Juan, tiene un saldo de: $5000 pesos y pertenece a la categoria de enseñanza`
);

console.log(companies);
