"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["male", "female"]
      },
      age_range: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["-30", "30-39", "40-49", "50-59", "60+"]
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["client", "admin", "super_admin"]
      },
      seniority: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["-5", "5-9", "10-14", "15-19", "20+"]
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
