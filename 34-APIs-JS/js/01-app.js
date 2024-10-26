const notifyBtn = document.querySelector("#notificar");
notifyBtn.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    console.log("el resultado es:", result);
  });
});

// const showNotification = document.querySelector("#verNotificacion");
// showNotification.addEventListener("click", () => {
//   if (Notification.permission === "granted") {
//     new Notification("Esta es la notificacion");
//   }
// });

const verNotificacionBtn = document.querySelector("#verNotificacion");
verNotificacionBtn.addEventListener("click", () => {
  if (Notification.permission == "granted") {
    new Notification("Esta es la notificación");
  }
});
