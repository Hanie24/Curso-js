const cash = 300;
const credit = 1000;
const available = cash + credit;
const totalToPay = 600;

if (cash > totalToPay || credit > totalToPay) {
  console.log("Si puedes pagar");
} else {
  console.log("No puedes pagar");
}
