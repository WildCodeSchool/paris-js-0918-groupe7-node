'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    question: {type : DataTypes.STRING, allowNull : false},
    agile_orientation: {type : DataTypes.ENUM('Agile Adoption', 'Agile Capabilities'), allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  questions.beforeSave((x, options) => {
    return x.is_active = 1
  })
  questions.beforeBulkCreate((questions, options) => {
    questions.map(question => 
      question.is_active = 1
    )
  })
  questions.associate = function(models) {
    // associations can be defined here

    questions.hasMany(models.users_answers_possibilities_questions, {
      foreignKey : {
        primaryKey : true,
        allowNull : false,
      }
    })

    questions.belongsTo(models.sub_pillars, {
      foreignKey : {
        allowNull : false,
      }
    })

    questions.belongsToMany(models.answers_possibilities, {
      through : "questions_answers_possibilities",
    })
  };
  return questions;
};