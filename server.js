const express = require("express");
const app = express();
const models = require("./models");

models.sequelize.sync().then(() => {
  app.listen(3002);
});

app.get("/users", (req, res) => {
  models.users.findAll().then(u => res.json(u));
});

app.get("/companies", (req, res) => {
  models.companies.findAll().then(u => res.json(u));
});
