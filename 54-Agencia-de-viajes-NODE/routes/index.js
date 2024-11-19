import express from "express";

const router = express.Router();

app.get("/", (req, res) => {
  // send es un método que se utiliza para mostrar cosas en pantalla
  res.send("Inicio");
});
app.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});
app.get("/contacto", (req, res) => {
  res.send("Contacto");
});
