// Variables y selectores
const form = document.querySelector("#agregar-gasto");
const spending = document.querySelector("#gastos ul");

// Eventos
eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", askForQuote);
  form.addEventListener("submit", addExpense);
}

// Clases
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
    this.bills = [];
  }

  newExpense(bill) {
    this.bills = [...this.bills, bill];
    this.calculateRemainder();
  }

  calculateRemainder() {
    const used = this.bills.reduce((total, bill) => total + bill.amount, 0);
    this.remaining = this.budget - used;
    console.log(this.remaining);
  }

  eliminateExpense(id) {
    this.bills = this.bills.filter((bill) => bill.id !== id);
    this.calculateRemainder();
  }
}

class UI {
  insertBudget(amount) {
    // Extrayendo valores
    const { budget, remaining } = amount;

    // Agregar al HTML
    document.querySelector("#total").textContent = budget;
    document.querySelector("#restante").textContent = remaining;
  }

  // Mostrar aletra
  printAlert(message, type) {
    // Crea contenedor de mensaje
    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert");

    // Si es de tipo error agrega una clase
    if (type === "error") {
      divMessage.classList.add("alert-danger");
    } else {
      divMessage.classList.add("alert-success");
    }

    // Mensaje de error
    divMessage.textContent = message;

    // Insertar en el DOM
    document.querySelector(".primario").insertBefore(divMessage, form);

    // Quitar el alert despues de 3 segundos
    setTimeout(() => {
      divMessage.remove();
    }, 3000);
  }

  addExpenseToList(bills) {
    this.claenHTML();

    bills.forEach((bill) => {
      const { amount, name, id } = bill;

      //   Crear lista
      const newBill = document.createElement("li");
      newBill.className =
        "list-group-item d-flex justify-content-between align-items-center";
      newBill.dataset.id = id;

      // Crear HTML del gasto
      newBill.innerHTML = `
        ${name}
        <span class="badge badge-primary badge-pill">$ ${amount}</span>
    `;

      // Boton
      const btnClear = document.createElement("button");
      btnClear.classList.add("btn", "btn-danger", "borrar-gasto");
      btnClear.textContent = "Borrar";
      btnClear.onclick = () => {
        eliminateExpense(id);
      };
      newBill.appendChild(btnClear);

      // Agregar al documento
      spending.appendChild(newBill);
    });
  }
  claenHTML() {
    while (spending.firstChild) {
      spending.removeChild(spending.firstChild);
    }
  }

  updateRemaining(remaining) {
    document.querySelector("#restante").textContent = remaining;
  }

  checkBudget(budgetObj) {
    const { budget, remaining } = budgetObj;
    const remainingDiv = document.querySelector(".restante");

    // Comprobar porcentaje de gastos
    if (budget / 4 > remaining) {
      remainingDiv.classList.remove("alert-success", "alert-warning");
      remainingDiv.classList.add("alert-danger");
    } else if (budget / 2 > remaining) {
      remainingDiv.classList.remove("alert-success");
      remainingDiv.classList.add("alert-warning");
    } else {
      remainingDiv.classList.remove("alert-danger", "alert-warning");
      remainingDiv.classList.add("alert-success");
    }
  }
}

//  Instanciar
const ui = new UI();
let budget;

// Funciones
function askForQuote() {
  const userBudget = prompt("¿Cuál es tu presupuesto?");

  console.log(userBudget);

  if (
    userBudget === "" ||
    userBudget === null ||
    isNaN(userBudget) ||
    userBudget <= 0
  ) {
    window.location.reload();
  }

  budget = new Budget(userBudget);
  console.log(budget);

  ui.insertBudget(budget);
}

// Añadir gastos
function addExpense(e) {
  e.preventDefault();

  // Leer los datos del formulario
  const name = document.querySelector("#gasto").value;
  const amount = Number(document.querySelector("#cantidad").value);

  // Validación
  if (name === "" || amount === "") {
    ui.printAlert("Ambos campos son obligatorios", "error");
    return;
  } else if (amount <= 0 || isNaN(amount)) {
    // si hay una cantidad negativa o letras...
    ui.printAlert("Cantidad no válida", "error");
    return;
  }

  //   Generar un objeto con el gasto
  const bill = { name, amount, id: Date.now() };

  //   Añade un nuevo gasto
  budget.newExpense(bill);

  //   Se ingreso el gasto correctamente
  ui.printAlert("Gasto agregado correctamente");

  //   Imprimir los gastos
  const { bills, remaining } = budget;
  ui.addExpenseToList(bills);

  ui.updateRemaining(remaining);

  ui.checkBudget(budget);

  // reiniciar el formulario
  form.reset();
}

function eliminateExpense(id) {
  // Elimina los elementos del objeto
  budget.eliminateExpense(id);

  //   Elimina los elementos del HTML
  const { bills, remaining } = budget;
  ui.addExpenseToList(bills);
  ui.updateRemaining(remaining);

  ui.checkBudget(budget);
}
