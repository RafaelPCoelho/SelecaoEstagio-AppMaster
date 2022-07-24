const { json } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send({
    alive: true,
  });
});

app.listen(80, () => {
  console.log("Server aberto");
});
