const url = "http://localhost:4000/clients";

// Crear nuevo cliente
export const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Conten-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

// Obtiene todos los clientes
export const getCLient = async () => {
  try {
    const result = await fetch(url);
    const resolve = await result.json();
    return resolve;
  } catch (error) {
    console.log(error);
  }
};

// Eliminar cliente
export const removeClient = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Obtiene cliente por su ID
export const getClientForID = async (id) => {
  try {
    const result = await fetch(`${url}/${id}`);
    const resolve = await result.json();
    return resolve;
  } catch (error) {
    console.log(error);
  }
};

// Actualiza un registro
export const updateDataClient = async (client) => {
  console.log(client);
  try {
    await fetch(`${url}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
