import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  // send es un método que se utiliza para mostrar cosas en pantalla
  res.send("Inicio");
});
router.get("/nosotros", (req, res) => {
  // render imprime un view
  res.render("nosotros");
});
router.get("/contacto", (req, res) => {
  res.send("Contacto");
});

export default router;
