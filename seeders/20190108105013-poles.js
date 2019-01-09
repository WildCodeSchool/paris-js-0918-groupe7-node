'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('poles', [{
        name: 'Audit',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Branch network',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Communication',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Human Ressources',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Information Technology',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('poles', null, {});
  }
};
