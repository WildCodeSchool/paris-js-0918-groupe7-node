const express = require("express");
const app = express();
const models = require("./models");

models.sequelize.sync().then(() => {
  app.listen(3002);
});
