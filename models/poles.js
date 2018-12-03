"use strict";
module.exports = (sequelize, DataTypes) => {
  const poles = sequelize.define(
    "poles",
    {
      name: DataTypes.STRING
    },
    {}
  );
  poles.associate = function(models) {
    poles.hasMany(models.users, {
      foreignKey: {}
    });
    poles.belongsToMany(models.pillars, {
      through: "pillars_poles"
    });
  };
  return poles;
};
