"use strict";
module.exports = (sequelize, DataTypes) => {
  const pillars = sequelize.define(
    "pillars",
    {
      name: DataTypes.STRING
    },
    {}
  );
  pillars.associate = function(models) {
    pillars.belongsToMany(models.poles, {
      through: "pillars_poles"
    });
  };
  return pillars;
};
