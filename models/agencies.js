'use strict';
module.exports = (sequelize, DataTypes) => {
  const agencies = sequelize.define('agencies', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : false}
  }, {});
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