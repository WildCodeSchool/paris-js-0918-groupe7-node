'use strict';
module.exports = (sequelize, DataTypes) => {
  const sub_pillars = sequelize.define('sub_pillars', {
    name: {type: DataTypes.STRING, allowNull: false},
    is_active: {type: DataTypes.BOOLEAN, allowNull: false},
  }, {});
  sub_pillars.associate = function(models) {
    sub_pillars.hasMany(models.questions, {
      foreignKey : {
        allowNull : false
      }
    })
    sub_pillars.belongsTo(models.pillars, {
      foreignKey : {
        allowNull : false,
      }
    })
  };
  return sub_pillars;
};