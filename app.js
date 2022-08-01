const { json } = require("express");
const express = require("express");
const body = require("body-parser");

const app = express();

app.use(body.json());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send({
    alive: true,
  });
});

app.post("/donation", (req, res) => {
  var faltantes = [];
  if (!req.body.name) {
    faltantes.push("name");
  }
  if (!req.body.email) {
    faltantes.push("email");
  }
  if (!req.body.phone) {
    faltantes.push("phone");
  }
  if (!req.body.city) {
    faltantes.push("city");
  }
  if (!req.body.state) {
    faltantes.push("state");
  }
  if (!req.body.streetAddress) {
    faltantes.push("streetAddress");
  }
  if (!req.body.number) {
    faltantes.push("number");
  }
  if (!req.body.complement) {
    faltantes.push("complement");
  }
  if (!req.body.neighborhood) {
    faltantes.push("neighborhood");
  }
  if (!req.body.deviceCount) {
    faltantes.push("deviceCount");
  }
  if (!req.body.devices) {
    faltantes.push("devices");
  }
  if (faltantes.length > 0) {
    res.status(400).send({
      error: true,
      requiredFields: faltantes,
      errorMessage: "Todos os campos obrigatórios devem ser informados",
    });
  }

  if (!req.body.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    return res.status(400).send({
      error: true,
      errorMessage: "O campo email não é válido",
    });
  }
  if (req.body.deviceCount != req.body.devices.length) {
    return res.status(400).send({
      error: true,
      errorMessage: `A quantidade de equipamentos (${req.body.deviceCount}) não está de acordo com as informações de equipamentos enviados (${req.body.devices.length})`,
    });
  }
  for (let device of req.body.devices) {
    if (!device.type.match(/notebook|desktop|netbook|screen|printer|scanner/))
      res.status(400).send({
        error: true,
        errorMessage: "O tipo do equipamento não corresponde com o desejado",
      });
  }

  res.status(200).send({ success: true });
});

app.listen(80, () => {
  console.log("Server aberto");
});
