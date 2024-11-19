import express from "express";

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

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

app.listen(port, () => {
  console.log(`El servidor esta funciontando en el puerto ${port}`);
});
