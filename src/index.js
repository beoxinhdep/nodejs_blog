const path = require("path");
const express = require("express");
const morgan = require("morgan");

const route = require("./routes");
const {engine: handlebars} = require("express-handlebars");

const app = express();
const port = 3030;

app.use(express.urlencoded());
app.use(express.json());

//statc file
app.use(express.static(path.join(__dirname, "public")));

//HTTP loggers
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars({extname: ".hbs"}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//route
route(app);

app.post("/search", (req, res) => {
  console.log(req.body);
  res.render("search");
});

app.post("/news", (req, res) => {
  res.render("news");
});

//listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
