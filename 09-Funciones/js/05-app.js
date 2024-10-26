iniciarApp();

function iniciarApp() {
  console.log("Iniciando App");
  secondFunction();
}

function secondFunction() {
  console.log("Desde la segunda función");
  userAuthentication("Pablo");
}

function userAuthentication(user) {
  console.log("Autenticando usuario... espere");
  console.log(`Usuario autenticado exitosamente: ${user}`);
}
