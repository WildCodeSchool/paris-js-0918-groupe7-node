const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const models = require("./models");
const routerIndex = require("./routes/index");
const routerCompanies = require("./routes/companies");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(morgan("dev"));

app.use('/', routerIndex);
app.use('/companies', routerCompanies);

models.sequelize.sync().then(() => {
  app.listen(3002);
});
