'use strict';
module.exports = (sequelize, DataTypes) => {
  const email_extensions = sequelize.define('email_extensions', {
    email_extension: {type : DataTypes.STRING, allowNull : false}
  }, {});
  email_extensions.associate = function(models) {
    // associations can be defined here
    email_extensions.belongsTo(models.companies, {
      foreignKey: {
        allowNull : false
      }
    })

  };
  return email_extensions;
};