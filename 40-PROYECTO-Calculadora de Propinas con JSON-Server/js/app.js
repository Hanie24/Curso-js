let client = {
  table: "",
  hour: "",
  order: [],
};

const categories = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnSaveClient = document.querySelector("#guardar-cliente");
btnSaveClient.addEventListener("click", saveClient);

function saveClient() {
  const table = document.querySelector("#mesa").value;
  const hour = document.querySelector("#hora").value;

  //   Revisar si hay campos vacios
  const emptyFields = [table, hour].some((field) => field === "");

  if (emptyFields) {
    // Verificar si ya hay una alerta
    const existAlert = document.querySelector(".invalid-feedback");

    if (!existAlert) {
      const alert = document.createElement("DIV");
      alert.classList.add("invalid-feedback", "d-block", "text-center");
      alert.textContent = "Todos los campos son obligatorios";
      document.querySelector(".modal-body form").appendChild(alert);

      setTimeout(() => {
        alert.remove();
      }, 3000);
    }
    return;
  }

  // Asignar datos del formulario a cliente
  client = { ...client, table, hour };

  //   Ocultar modal
  const modalForm = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalForm);
  modalBootstrap.hide();

  //   Mostrar secciones
  showSections();

  //   Obtener platillos desde json-server
  getSaucers();
}

function showSections() {
  const hiddenSections = document.querySelectorAll(".d-none");
  hiddenSections.forEach((section) => section.classList.remove("d-none"));
}

function getSaucers() {
  const url = "http://localhost:4000/saucer";

  fetch(url)
    .then((response) => response.json())
    .then((resolve) => showSaucers(resolve))
    .catch((error) => console.log(error));
}

function showSaucers(saucers) {
  const content = document.querySelector("#platillos .contenido");

  saucers.forEach((saucer) => {
    const { name, price, category, id } = saucer;
    const row = document.createElement("DIV");
    row.classList.add("row", "py-3", "border-top");

    const nameDiv = document.createElement("DIV");
    nameDiv.classList.add("col-md-4");
    nameDiv.textContent = name;

    const priceDiv = document.createElement("DIV");
    priceDiv.classList.add("col-md-3", "fw-bold");
    priceDiv.textContent = `$${price}`;

    const categoryDiv = document.createElement("DIV");
    categoryDiv.classList.add("col-md-3");
    categoryDiv.textContent = categories[category];

    const inputQuantity = document.createElement("INPUT");
    inputQuantity.type = "number";
    inputQuantity.min = 0;
    inputQuantity.value = 0;
    inputQuantity.classList.add("form-control");
    inputQuantity.id = `product-${id}`;

    // Funcion que indica que platillo y que cantidad se esta agregando
    // De esta forma la funcion no se manda a llamar hasta que se ejecute el evento
    inputQuantity.onchange = function () {
      const quantity = parseInt(inputQuantity.value);
      addsaucer({ ...saucer, quantity });
    };

    const addQuantity = document.createElement("DIV");
    addQuantity.classList.add("col-md-2");
    addQuantity.appendChild(inputQuantity);

    row.appendChild(nameDiv);
    row.appendChild(priceDiv);
    row.appendChild(categoryDiv);
    row.appendChild(addQuantity);

    content.appendChild(row);
  });
}

function addsaucer(product) {
  // Extraer el pedido actual
  let { order } = client;

  //   Revisar que la cantidad sea mayor a 0
  if (product.quantity > 0) {
    // Si un producto ya existe solo actualiza la cantidad
    if (order.some((art) => art.id === product.id)) {
      const updateOrder = order.map((art) => {
        if (art.id === product.id) {
          art.quantity = product.quantity;
        }
        return art;
      });
      //   Se asigna el nuevo array a client.order
      client.order = [...updateOrder];
    } else {
      // El producto no existe, entonces se agrega
      client.order = [...order, product];
    }
  } else {
    // Eliminar elementos si la cantidad es 0
    const result = order.filter((art) => art.id !== product.id);
    client.order = [...result];
  }

  //   Limpiar el HTML previo
  cleanHTML();

  if (client.order.length) {
    //   Mostrar el resumen del pedido
    updateSummary();
  } else {
    emptyOrder();
  }
}

function updateSummary() {
  const { table, hour } = client;
  const content = document.querySelector("#resumen .contenido");

  const summary = document.createElement("DIV");
  summary.classList.add("col-md-6", "card", "py-5", "px-3", "shadow");

  const tableDiv = document.createElement("DIV");
  tableDiv.textContent = "Mesa: ";
  tableDiv.classList.add("fw-bold");

  const tableSpan = document.createElement("SPAN");
  tableSpan.textContent = table;
  tableSpan.classList.add("fw-normal");

  const hourDiv = document.createElement("DIV");
  hourDiv.textContent = "Hora: ";
  hourDiv.classList.add("fw-bold");

  const hourSpan = document.createElement("SPAN");
  hourSpan.textContent = hour;
  hourSpan.classList.add("fw-normal");

  tableDiv.appendChild(tableSpan);
  hourDiv.appendChild(hourSpan);

  //   Titulo de la sección
  const heading = document.createElement("H3");
  heading.textContent = "Orden";
  heading.classList.add("my-4", "text-center");

  //   Recorrer el array de pedidos
  const group = document.createElement("UL");
  group.classList.add("list-group");

  const { order } = client;
  order.forEach((art) => {
    const { name, quantity, price, id } = art;

    const list = document.createElement("LI");
    list.classList.add("list-group-item");

    const nameEl = document.createElement("H4");
    nameEl.classList.add("my-4");
    nameEl.textContent = name;

    // Cantidad del articulo
    const quantityeL = document.createElement("P");
    quantityeL.classList.add("fw-bold");
    quantityeL.textContent = `Cantidad:`;

    const valueQuantity = document.createElement("SPAN");
    valueQuantity.classList.add("fw-normal");
    valueQuantity.textContent = quantity;

    // Precio del articulo
    const priceEl = document.createElement("P");
    priceEl.classList.add("fw-bold");
    priceEl.textContent = `Precio unitario:`;

    const valuePrice = document.createElement("SPAN");
    valuePrice.classList.add("fw-normal");
    valuePrice.textContent = `$${price}`;

    // Subtotal
    const subtotalEl = document.createElement("P");
    subtotalEl.classList.add("fw-bold");
    subtotalEl.textContent = `Subtotal:`;

    const valueSubtotal = document.createElement("SPAN");
    valueSubtotal.classList.add("fw-normal");
    valueSubtotal.textContent = calcularSubtotal(price, quantity);

    // Boton para eliminar
    const buttonDelete = document.createElement("BUTTON");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.textContent = "Eliminar articulo";

    // Funcion para eliminar el elemento del pedido
    buttonDelete.onclick = function () {
      deleteProduct(id);
    };

    quantityeL.appendChild(valueQuantity);
    priceEl.appendChild(valuePrice);
    subtotalEl.appendChild(valueSubtotal);

    // Agregar elementos al LI
    list.appendChild(nameEl);
    list.appendChild(quantityeL);
    list.appendChild(priceEl);
    list.appendChild(subtotalEl);
    list.appendChild(buttonDelete);

    group.appendChild(list);
  });

  summary.appendChild(heading);
  summary.appendChild(tableDiv);
  summary.appendChild(hourDiv);
  summary.appendChild(group);

  content.appendChild(summary);

  //   Mostrar el formulario de propinas
  tipForm();
}

function cleanHTML() {
  const content = document.querySelector("#resumen .contenido");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function calcularSubtotal(price, quantity) {
  return `$${price * quantity}`;
}

function deleteProduct(id) {
  const { order } = client;

  const result = order.filter((art) => art.id !== id);
  client.order = [...result];

  cleanHTML();

  if (client.order.length) {
    updateSummary();
  } else {
    emptyOrder();
  }

  //   Se regresa la cantidad a 0 en el formulario
  const removedProduct = `#product-${id}`;
  const removeInput = document.querySelector(removedProduct);
  removeInput.value = 0;
}

function emptyOrder() {
  const content = document.querySelector("#resumen", ".contenido");

  const text = document.createElement("P");
  text.classList.add("text-center");
  text.textContent = "Añade los elementos del pedido";

  content.appendChild(text);
}

function tipForm() {
  const content = document.querySelector("#resumen .contenido");

  const form = document.createElement("DIV");
  form.classList.add("col-md-6", "formulario");

  const divForm = document.createElement("DIV");
  divForm.classList.add("card", "py-5", "px-3", "shadow");

  const heading = document.createElement("H3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  //   Radio Button 10%
  const radio10 = document.createElement("INPUT");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = "10";
  radio10.classList.add("form-check-input");
  radio10.onclick = calculateTip;

  const labelRadio10 = document.createElement("LABEL");
  labelRadio10.textContent = "10%";
  labelRadio10.classList.add("form-check-label");

  const divRadio10 = document.createElement("DIV");
  divRadio10.classList.add("form-check");

  divRadio10.appendChild(radio10);
  divRadio10.appendChild(labelRadio10);

  //   Radio Button 25%
  const radio25 = document.createElement("INPUT");
  radio25.type = "radio";
  radio25.name = "propina";
  radio25.value = "25";
  radio25.classList.add("form-check-input");
  radio25.onclick = calculateTip;

  const labelRadio25 = document.createElement("LABEL");
  labelRadio25.textContent = "25%";
  labelRadio25.classList.add("form-check-label");

  const divRadio25 = document.createElement("DIV");
  divRadio25.classList.add("form-check");

  divRadio25.appendChild(radio25);
  divRadio25.appendChild(labelRadio25);

  //   Radio Button 50%
  const radio50 = document.createElement("INPUT");
  radio50.type = "radio";
  radio50.name = "propina";
  radio50.value = "50";
  radio50.classList.add("form-check-input");
  radio50.onclick = calculateTip;

  const labelRadio50 = document.createElement("LABEL");
  labelRadio50.textContent = "50%";
  labelRadio50.classList.add("form-check-label");

  const divRadio50 = document.createElement("DIV");
  divRadio50.classList.add("form-check");

  divRadio50.appendChild(radio50);
  divRadio50.appendChild(labelRadio50);

  form.appendChild(divForm);

  divForm.appendChild(heading);
  divForm.appendChild(divRadio10);
  divForm.appendChild(divRadio25);
  divForm.appendChild(divRadio50);

  content.appendChild(form);
}

function calculateTip() {
  const { order } = client;

  let subtotal = 0;

  //   Calcular el subtotal
  order.forEach((art) => {
    subtotal += art.quantity * art.price;
  });

  //   Seleccionar la cantidad de la propina
  const tipSelect = document.querySelector('[name="propina"]:checked').value;

  //   Calcular la propina

  const tip = (subtotal * parseInt(tipSelect)) / 100;

  // Calcular el total a pagar

  const total = subtotal + tip;

  showTotal(total, subtotal, tip);
}

function showTotal(total, subtotal, tip) {
  const form = document.querySelector(".formulario > div");

  const divTotals = document.createElement("DIV");
  divTotals.classList.add("total-pagar", "my-5");

  // Mostrar el subtotal
  const subtotalHTML = document.createElement("P");
  subtotalHTML.classList.add("fs-3", "fw-bold", "mt-2");
  subtotalHTML.textContent = "Subtotal: ";

  const subtotalSpan = document.createElement("SPAN");
  subtotalSpan.classList.add("fw-normal");
  subtotalSpan.textContent = `$${subtotal}`;

  subtotalHTML.appendChild(subtotalSpan);

  // Mostrar la propina
  const tipHTML = document.createElement("P");
  tipHTML.classList.add("fs-3", "fw-bold", "mt-2");
  tipHTML.textContent = "Propina: ";

  const tipSpan = document.createElement("SPAN");
  tipSpan.classList.add("fw-normal");
  tipSpan.textContent = `$${tip}`;

  subtotalHTML.appendChild(subtotalSpan);
  tipHTML.appendChild(tipSpan);

  // Mostrar el total a pagar
  const totalTML = document.createElement("P");
  totalTML.classList.add("fs-3", "fw-bold", "mt-2");
  totalTML.textContent = "Total: ";

  const totalSpan = document.createElement("SPAN");
  totalSpan.classList.add("fw-normal");
  totalSpan.textContent = `$${total}`;

  subtotalHTML.appendChild(subtotalSpan);
  tipHTML.appendChild(tipSpan);
  totalTML.appendChild(totalSpan);

  //   Eliminar el total previo
  const payTotalDiv = document.querySelector(".total-pagar");

  if (payTotalDiv) {
    payTotalDiv.remove();
  }

  divTotals.appendChild(subtotalHTML);
  divTotals.appendChild(tipHTML);
  divTotals.appendChild(totalTML);

  form.appendChild(divTotals);
}
