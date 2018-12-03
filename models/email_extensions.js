"use strict";
module.exports = (sequelize, DataTypes) => {
  const email_extensions = sequelize.define(
    "email_extensions",
    {
      email_extension: DataTypes.STRING
    },
    {}
  );
  email_extensions.associate = function(models) {
    email_extensions.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return email_extensions;
};
