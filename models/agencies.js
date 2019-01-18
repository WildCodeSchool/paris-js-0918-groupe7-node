'use strict';
module.exports = (sequelize, DataTypes) => {
  const agencies = sequelize.define('agencies', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  agencies.beforeSave((agency, options) => {
    return agency.is_active = 1
  })
  agencies.beforeBulkCreate((agencies, options) => {
    agencies.map(agency => 
      agency.is_active = 1
    )
  })
  agencies.associate = function(models) {
    // associations can be defined here
    agencies.hasMany(models.users, {
      foreignKey: {
        allowNull : true
      }
    })
    agencies.belongsTo(models.companies, {
      foreignKey: {
        allowNull : false
      }
    })
  };
  return agencies;
};