const mongoose = require("mongoose");

const Filme = mongoose.model("Filme", {
  title: {
    type: String,
    required: true
  },
  authors: Array,
  year: Number,
  description: Object,
  awards: [Object]
});

module.exports = Filme;
