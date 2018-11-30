"use strict";
module.exports = (sequelize, DataTypes) => {
  const poles = sequelize.define(
    "poles",
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  poles.associate = function(models) {
    poles.hasMany(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
    poles.belongsToMany(models.pillars, {
      through: "pillars_poles"
    });
  };
  return poles;
};
