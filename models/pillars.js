'use strict';
module.exports = (sequelize, DataTypes) => {
  const pillars = sequelize.define('pillars', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  pillars.beforeSave((x, options) => {
    return x.is_active = 1
  })
  pillars.beforeBulkCreate((pillars, options) => {
    pillars.map(pillar => 
      pillar.is_active = 1
    )
  })
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