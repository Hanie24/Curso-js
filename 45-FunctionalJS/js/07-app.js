// Funciones que retornan una funcion
const getClient = () => () => console.log("Hanie");

const func = getClient();

func();
