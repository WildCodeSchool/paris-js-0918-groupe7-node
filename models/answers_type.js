'use strict';
module.exports = (sequelize, DataTypes) => {
  const answers_type = sequelize.define('answers_type', {
    type: {type : DataTypes.STRING, allowNull : false},
    is_active: {type : DataTypes.BOOLEAN, allowNull : true}
  }, {});
  answers_type.beforeSave((x, options) => {
    return x.is_active = 1
  })
  answers_type.beforeBulkCreate((answers_type, options) => {
    answers_type.map(answer_type => 
      answer_type.is_active = 1
    )
  })
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