const express = require("express");
const router = express.Router();
const Filme = require("../models/filme");
router.get("/", (req, res) => {
  //regra negocio
  res.json({ menssage: "Todos os registros" });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ menssage: `buscar por id: ${id}` });
});

router.post("/", async (req, res) => {
  try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensage: `atualizar registro com id ${id}` });
});

module.exports = router;
