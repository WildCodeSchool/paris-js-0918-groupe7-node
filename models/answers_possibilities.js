"use strict";
module.exports = (sequelize, DataTypes) => {
  const answers_possibilities = sequelize.define(
    "answers_possibilities",
    {
      answer: { type: DataTypes.STRING },
      weight: { type: DataTypes.INTEGER },
      order: { type: DataTypes.STRING }
    },
    {}
  );
  answers_possibilities.associate = function(models) {
    answers_possibilities.belongsToMany(models.questions, {
      through: "questions_answers_possibilities"
    });
    answers_possibilities.belongsTo(models.answers_type, {
      foreignKey: {
        allowNull: false
      }
    });
    answers_possibilities.belongsToMany(models.users, {
      through: "users_answers_possibilities_questions"
    });
    answers_possibilities.belongsToMany(models.questions, {
      through: "users_answers_possibilities_questions"
    });
  };
  return answers_possibilities;
};
