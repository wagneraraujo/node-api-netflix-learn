const mongoose = require("mongoose");

const Filme = mongoose.model("Filme", {
  title: String,
  authors: Array,
  year: Number,
  description: Object,
  awards: [Object]
});

module.exports = Filme;
