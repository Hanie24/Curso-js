window.addEventListener("online", updatedState);

window.addEventListener("offline", updatedState);

function updatedState() {
  if (navigator.onLine) {
    console.log("si estas conectado");
  } else {
    console.log("no estas conectado");
  }
}
