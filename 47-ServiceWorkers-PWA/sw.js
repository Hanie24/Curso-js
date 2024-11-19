// const nameCache = "apv-v1";

// const files = [
//   "/",
//   "/index.html",
//   "/error.html",
//   "/css/bootstrap.css",
//   "/css/styles.css",
//   "/js/app.js",
//   "js/apv.js",
// ];

// se ejecuta solo cuando se instala el service worker
// self.addEventListener("install", (e) => {
//   console.log("service worker instalado", e);

//   Espera hasta que se hayan descargado los archivos
//   e.waitUntil(
//     caches.open(nameCache).then((cache) => {
//       console.log("cachendo...");
//       //   los archivos se agregan al cache
//       cache.addAll(files);
//     })
//   );
// });

// Evento que activa el service worker
// self.addEventListener("activate", (e) => {
//   console.log("Service worker activado", e);
// });

// Fetch para descargar archivos estaticos
// self.addEventListener("fetch", (e) => {
//   console.log("Fetch.. ", e);

//   e.respondWith(
//     caches
//       .match(e.request)
//       .then((respuestaCache) => {
//         return respuestaCache;
//       })
//       .catch(() => caches.match("/error.html"))
//   );
// });
