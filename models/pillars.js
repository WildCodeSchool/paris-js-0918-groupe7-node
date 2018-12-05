'use strict';
module.exports = (sequelize, DataTypes) => {
  const pillars = sequelize.define('pillars', {
    name: {type : DataTypes.STRING, allowNull : false}
  }, {});
  pillars.associate = function(models) {
    // associations can be defined here
    pillars.belongsToMany(models.poles, {
      through : "pillars_poles",
    })

    pillars.hasMany(models.sub_pillars, {
      foreignKey : {
        allowNull : false
      }
    })
  };
  return pillars;
};