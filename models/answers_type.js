'use strict';
module.exports = (sequelize, DataTypes) => {
  const answers_type = sequelize.define('answers_type', {
    type: {type : DataTypes.STRING, allowNull : false}
  }, {});
  answers_type.associate = function(models) {
    // associations can be defined here
    answers_type.hasMany(models.answers_possibilities, {
      foreignKey : {
        allowNull : false,
      }
    })
  };
  return answers_type;
};