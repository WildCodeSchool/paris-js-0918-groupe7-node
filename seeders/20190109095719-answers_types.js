'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('answers_types', [{
        type: 'Yes/No/I don\'t know',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        type: 'Lickert scale',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        type: 'Drop down menu',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('answers_types', null, {});
  }
};
