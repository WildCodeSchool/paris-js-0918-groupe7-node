'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : false}
  }, {});
  companies.associate = function(models) {
    companies.hasMany(models.users, {
      foreignKey: {
        allowNull : false
      }
    })
    companies.hasMany(models.agencies, {
      foreignKey: {
        allowNull : false
      }
    })
    companies.hasMany(models.email_extensions, {
      foreignKey : {
        allowNull : false,
      }
    })
  };
  return companies;
};