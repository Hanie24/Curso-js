import express from "express";
import router from "./routes/index.js";

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
// view engine significa que se va a usar un template
app.set("view engine", "pug");

// Agregar router
// use soporta todos los métodos HTTP
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor esta funciontando en el puerto ${port}`);
});
