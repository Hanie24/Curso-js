import { getCLient, removeClient } from "./API.js";

(function () {
  const list = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", showClients);

  list.addEventListener("click", removeComfirm);

  async function showClients() {
    const clients = await getCLient();

    clients.forEach((client) => {
      const { name, email, phone, id, companie } = client;

      const row = document.createElement("TR");

      row.innerHTML += `
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${phone}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${companie}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
      `;

      list.appendChild(row);
    });
  }

  function removeComfirm(e) {
    if (e.target.classList.contains("eliminar")) {
      const clientId = e.target.dataset.cliente;

      const uphold = confirm("¿Deseas eliminar este registro?");

      if (uphold) {
        removeClient(clientId);
      }
    }
  }
})();
