"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

        autoIncrement: true
      },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"]
      },
      age_range: {
        type: DataTypes.ENUM,
        values: ["-30", "30-39", "40-49", "50-59", "60+"]
      },
      role: {
        type: DataTypes.ENUM,
        values: ["client", "admin", "super_admin"]
      },
      seniority: {
        type: DataTypes.ENUM,
        values: ["-5", "5-9", "10-14", "15-19", "20+"]
      },
      is_active: { type: DataTypes.BOOLEAN }
    },
    {}
  );
  users.associate = function(models) {
    users.belongsTo(models.agencies, {
      foreignKey: {
        allowNull: false
      }
    });
    users.belongsTo(models.companies, {
      foreignKey: {
        allowNull: false
      }
    });
    users.belongsTo(models.poles, {
      foreignKey: {
        allowNull: false
      }
    });

    users.belongsToMany(models.answers_possibilities, {
      through: "users_answers_possibilities_questions"
    });
    users.belongsToMany(models.questions, {
      through: "users_answers_possibilities_questions"
    });
  };
  return users;
};
