const express = require("express");
const router = express.Router();
const Filme = require("../models/filme");

router.get("/", async (req, res) => {
  try {
    //find{} para filtros
    const filmes = await Filme.find({});
    res.json({ error: false, filmes: filmes });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
  //regra negocio
});

//id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await Filme.findById(id);
    res.json({ error: false, filme });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
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

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const novo_filme = req.body;
    const filme = await Filme.findByIdAndUpdate(id, novo_filme);

    //resposta
    res.json({ error: false, filme });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Filme.findByIdAndDelete(id);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
