'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_answers_possibilities_questions = sequelize.define('users_answers_possibilities_questions', {
  }, {});
  users_answers_possibilities_questions.associate = function(models) {
    // associations can be defined here
    users_answers_possibilities_questions.belongsTo(models.users, {
      foreignKey: {
        primaryKey : true,
        allowNull : false
      }
    })
    users_answers_possibilities_questions.belongsTo(models.answers_possibilities, {
      foreignKey: {
        primaryKey : true,
        allowNull : false
      }
    })
    users_answers_possibilities_questions.belongsTo(models.questions, {
      foreignKey: {
        primaryKey : true,
        allowNull : false
      }
    })
  };
  return users_answers_possibilities_questions;
};