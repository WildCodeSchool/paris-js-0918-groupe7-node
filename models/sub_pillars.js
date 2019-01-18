'use strict';
module.exports = (sequelize, DataTypes) => {
  const sub_pillars = sequelize.define('sub_pillars', {
    name: {type: DataTypes.STRING, allowNull: false},
    is_active: {type: DataTypes.BOOLEAN, allowNull: true},
  }, {});
  sub_pillars.beforeSave((x, options) => {
    return x.is_active = 1
  })
  sub_pillars.beforeBulkCreate((sub_pillars, options) => {
    sub_pillars.map(sub_pillar => 
      sub_pillar.is_active = 1
    )
  })
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