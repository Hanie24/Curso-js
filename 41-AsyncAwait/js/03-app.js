function downloadNewsClients() {
  return new Promise((resolve) => {
    console.log("Descargando clientes...");
    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function downloadNewsOrders() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");
    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 5000);
  });
}

// Manejar multiples awaits para que se ejecuten al mismo tiempo
const app = async () => {
  try {
    const resp = await Promise.all([
      downloadNewsClients(),
      downloadNewsOrders(),
    ]);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

app();
