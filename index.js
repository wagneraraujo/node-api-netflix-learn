const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/netflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const routes = require("./src/routes/filmes.routes");

app.use(bodyParser.json());
app.use(morgan("dev"));

//rotas para trabalhar
app.use("/", routes);

app.listen(3334, () => {
  console.log("servidor on");
});
