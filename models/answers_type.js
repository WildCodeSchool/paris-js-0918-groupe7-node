"use strict";
module.exports = (sequelize, DataTypes) => {
  const answers_type = sequelize.define(
    "answers_type",
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  answers_type.associate = function(models) {
    answers_type.hasMany(models.answers_possibilities, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return answers_type;
};
