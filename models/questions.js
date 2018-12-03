"use strict";
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define(
    "questions",
    {
      questions: DataTypes.STRING
    },
    {}
  );
  questions.associate = function(models) {
    questions.belongsToMany(models.answers_possibilities, {
      through: "questions_answers_possibilities"
    });
    questions.belongsToMany(models.users, {
      through: "users_answers_possibilities_questions"
    });
    questions.belongsToMany(models.answers_possibilities, {
      through: "users_answers_possibilities_questions"
    });
  };
  return questions;
};
