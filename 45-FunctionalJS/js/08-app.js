// const client = "Juan";

function showClient() {
  const client = "Hanie";

  console.log("Desde la funcion.", client);
}

// Aqui no esta disponible la variable client con el valor de Hanie, por lo cual imprime el valor de Juan, para que imprima Hanie hay que utilizar un closure
// console.log("Desde el scope global.", client);

// Closures
const getClient = () => {
  const name = "Hanie";

  function showName() {
    console.log(name);
  }

  return showName();
};

const client = getClient();
