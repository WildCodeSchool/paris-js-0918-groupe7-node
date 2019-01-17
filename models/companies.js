'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    name: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  companies.beforeSave((company, options) => {
    return company.is_active = 1
  })
  companies.beforeBulkCreate((companies, options) => {
    companies.map(company => 
      company.is_active = 1
    )
  })
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