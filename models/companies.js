"use strict";
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define(
    "companies",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      is_active: {
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  companies.associate = function(models) {
    // associations can be defined here
    companies.hasMany(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return companies;
};
