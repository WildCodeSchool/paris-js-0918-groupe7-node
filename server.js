const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const models = require("./models");

// Import routes
const routerIndex = require("./routes/index");
const routerCompanies = require("./routes/companies");
const routerEmailExtensions = require("./routes/email_extensions");
const routerAgencies = require("./routes/agencies");
const routerPillars = require("./routes/pillars");
const routerSubPillars = require("./routes/sub_pillars");
const routerPoles = require("./routes/poles");
const routerUsers = require("./routes/users");
const routerAnswersPossibilities = require("./routes/answers_possibilities");
const routerAnswersType = require("./routes/answers_type");
const routerQuestions = require("./routes/questions");
const routerPillarsPoles = require("./routes/pillars_poles");
const routerQuestionsAnswersPossibilities = require("./routes/questions_answers_possibilities");
const routerUsersAnswersPossibilitiesQuestions = require("./routes/users_answers_possibilities_questions");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(morgan("dev"));


// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routerIndex);
app.use('/companies', routerCompanies);
app.use('/email_extensions', routerEmailExtensions);
app.use('/agencies', routerAgencies);
app.use('/pillars', routerPillars);
app.use('/sub_pillars', routerSubPillars);
app.use('/poles', routerPoles);
app.use('/users', routerUsers);
app.use('/answers_possibilities', routerAnswersPossibilities);
app.use('/answers_type', routerAnswersType);
app.use('/questions', routerQuestions);
app.use('/pillars_poles', routerPillarsPoles);
app.use('/questions_answers_possibilities', routerQuestionsAnswersPossibilities);
app.use('/users_answers_possibilities_questions', routerUsersAnswersPossibilitiesQuestions);


models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3002);
});
