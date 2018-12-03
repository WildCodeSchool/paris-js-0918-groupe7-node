'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    question: {type : DataTypes.STRING, allowNull : false}
  }, {});
  questions.associate = function(models) {
    // associations can be defined here

    questions.hasMany(models.users_answers_possibilities_questions, {
      foreignKey : {
        primaryKey : true,
        allowNull : false,
      }
    })

    questions.belongsToMany(models.answers_possibilities, {
      through : "questions_answers_possibilities",
    })
  };
  return questions;
};