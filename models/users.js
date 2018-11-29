"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        allowNull: false
      },
      age_range: {
        type: DataTypes.ENUM,
        values: ["-30", "30-39", "40-49", "50-59", "60+"],
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM,
        values: ["client", "admin", "super_admin"],
        allowNull: false
      },
      seniority: {
        type: DataTypes.ENUM,
        values: ["-5", "5-9", "10-14", "15-19", "20+"],
        allowNull: false
      },
      is_active: { type: DataTypes.BOOLEAN, allowNull: false }
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
