const path = require("path");
const express = require("express");
const morgan = require("morgan");
const {engine: handlebars} = require("express-handlebars");

const app = express();
const port = 3000;

//statc file
app.use(express.static(path.join(__dirname, "public")));

//HTTP loggers
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars({extname: ".hbs"}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//route
app.get("/", (req, res) => {
  console.log(req.query.q);
  return res.render("home");
});
app.get("/news", (req, res) => {
  return res.render("news");
});
app.get("/search", (req, res) => {
  console.log(req.query.q);
  return res.render("search");
});

//listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
