'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pillars_poles', [{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
        poleId : 1,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
        poleId : 1,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
        poleId : 1,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
        poleId : 2,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
        poleId : 2,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
        poleId : 2,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
        poleId : 3,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
        poleId : 3,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
        poleId : 3,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4,
        poleId : 3,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
        poleId : 4,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
        poleId : 4,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4,
        poleId : 4,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
        poleId : 5,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
        poleId : 5,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
        poleId : 5,
      },{
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4,
        poleId : 5,
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pillars_poles', null, {});
  }
};
