'use strict';
module.exports = (sequelize, DataTypes) => {
  const poles = sequelize.define('poles', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  poles.beforeSave((pole, options) => {
    return pole.is_active = 1
  })
  poles.beforeBulkCreate((poles, options) => {
    poles.map(pole => 
      pole.is_active = 1
    )
  })
  poles.associate = function(models) {
    // associations can be defined here
    poles.hasMany(models.users, {
      foreignKey: {
        allowNull : false
      }
    })

    poles.belongsToMany(models.pillars, {
      through : "pillars_poles",
    })
  };
  return poles;
};