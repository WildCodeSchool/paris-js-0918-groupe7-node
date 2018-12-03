'use strict';
module.exports = (sequelize, DataTypes) => {
  const answers_possibilities = sequelize.define('answers_possibilities', {
    answer: {type : DataTypes.STRING, allowNull : false},
    weight: {type : DataTypes.INTEGER, allowNull : false},
    order: {type : DataTypes.STRING, allowNull : false},
  }, {});
  answers_possibilities.associate = function(models) {
    // associations can be defined here

    answers_possibilities.hasMany(models.users_answers_possibilities_questions, {
      foreignKey : {
        primaryKey : true,
        allowNull : false,
      }
    })

    answers_possibilities.belongsTo(models.answers_type, {
      foreignKey : {
        allowNull : false,
      }
    })

    answers_possibilities.belongsToMany(models.questions, {
      through : "questions_answers_possibilities",
    })
  };
  return answers_possibilities;
};