if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((register) => console.log("se instalo correctamemte", register))
    .catch((error) => console.log("fallo la instalación", error));
} else {
  console.log("service workers no soportados");
}
