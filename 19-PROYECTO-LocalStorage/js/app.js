// Variable
const form = document.querySelector("#formulario");
const listTweets = document.querySelector("#lista-tweets");

let tweets = [];

// Eventos
eventListener();

function eventListener() {
  // Cuando el usuario agrega un nuevo tweet
  form.addEventListener("submit", addTweet);

  //   Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    createTweetHTML();
  });
}

// Funciones
function addTweet(e) {
  e.preventDefault();

  //   Area donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //   validacion
  if (tweet === "") {
    errorMessaje("No puede ir vacio");

    // Evita que se ejecuten más lineas de código
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  //   Añadir al array de Tweets
  tweets = [...tweets, tweetObj];

  //   una vez agradado se va a crear el HTML
  createTweetHTML();

  //   Reiniciar el formulario
  form.reset();
}

function errorMessaje(error) {
  const errorMessaje = document.createElement("P");
  errorMessaje.textContent = error;
  errorMessaje.classList.add("error");

  // Insertar el mensaje de error en el contenido
  const addMessaje = document.querySelector("#contenido");
  addMessaje.appendChild(errorMessaje);

  //   Elimina el mensaje de error después de 3s
  setTimeout(() => {
    errorMessaje.remove();
  }, 3000);
}

function createTweetHTML() {
  cleanHMTL();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // Boton para eliminar tweet
      const btnDelete = document.createElement("a");
      btnDelete.classList.add("borrar-tweet");
      btnDelete.innerText = " X ";

      //   Funcion para eliminar Tweet
      btnDelete.onclick = () => {
        deleteTweet(tweet.id);
      };

      // Crear HTML
      const liHTML = document.createElement("li");
      liHTML.innerText = tweet.tweet;

      //   Asignar el boton
      liHTML.append(btnDelete);

      listTweets.appendChild(liHTML);
    });
  }

  synchronizeStorage();
}

// Agrega los tweets actuales al Local Storage
function synchronizeStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Eliminar un Tweet
function deleteTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);

  createTweetHTML();
}

// Limpiar HTML
function cleanHMTL() {
  while (listTweets.firstChild) {
    listTweets.removeChild(listTweets.firstChild);
  }
}
