const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");
const pagination = document.querySelector("#paginacion");

const registerPerPage = 100;
let totalPages;
let loop;
let currentPage = 1;

window.onload = () => {
  form.addEventListener("submit", validateForm);
};

function validateForm(e) {
  e.preventDefault();

  const searchValue = document.querySelector("#termino").value;

  if (searchValue === "") {
    showAlert("Agrega un valor de busqueda");

    return;
  }

  searchImages();
}

function showAlert(message) {
  const existAlert = document.querySelector(".alert");

  if (!existAlert) {
    const alert = document.createElement("P");

    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "alert"
    );

    alert.innerHTML = `
        <srong class="font-bold">Error"</stron>
        <span class="block sm:inline">${message}</span>
      `;

    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

async function searchImages() {
  const value = document.querySelector("#termino").value;

  const key = "46601692-84ef45d3963001d9efeb01dfb";
  const url = `https://pixabay.com/api/?key=${key}&q=${value}&per_page=${registerPerPage}&page=${currentPage}`;

  try {
    const response = await fetch(url);
    const resolve = await response.json();
    totalPages = calculatePages(resolve.totalHits);
    showImages(resolve.hits);
  } catch (error) {
    console.log(error);
  }
}

// Generador: Registra la cantidad de elementos de acuerdo a las pag
function* createPager(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function calculatePages(total) {
  return parseInt(Math.ceil(total / registerPerPage));
}

function showImages(images) {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }

  //   Recorrer el arreglo de imagenes e imprimirlas en HTML
  images.forEach((image) => {
    const { previewURL, likes, views, largeImageURL } = image;

    result.innerHTML += `
    <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
        <div class="bg-white">
            <img class="w-full" src="${previewURL}"/>
            <div class="p-4">
                <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                <p class="font-bold">${views} <span class="font-light">Visto</span></p>

                <a class="block w-full text-center bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
                    Ver Imagen 
                </a>
            </div>
        </div>
    </div>
    `;
  });

  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }

  printPager();
}

function printPager() {
  loop = createPager(totalPages);

  while (true) {
    const { done, value } = loop.next();
    if (done) return;

    // Si no ha llegano al final genera un boton por cada elemento del generador
    const link = document.createElement("a");
    link.href = "#";
    link.dataset.pagina = value;
    link.textContent = value;
    link.classList.add("underline", "next", "text-white", "font-bold", "mx-2");

    link.onclick = () => {
      currentPage = value;

      searchImages();
    };

    pagination.appendChild(link);
  }
}
