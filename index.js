const express = require("express");
const app = express();
const port = 3000;

//route
app.get("/web", (req, res) => {
  return res.send("Hello Phuong!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
