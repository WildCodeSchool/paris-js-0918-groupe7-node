"use strict";
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define(
    "companies",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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
