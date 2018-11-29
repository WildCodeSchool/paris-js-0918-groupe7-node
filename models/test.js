"use strict";
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define(
    "test",
    {
      name: DataTypes.STRING
    },
    {
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        allowNull: false
      }
    }
  );
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};
