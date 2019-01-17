'use strict';
const model = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return model.agencies.bulkCreate([{
        name: 'Hello Bank!',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 1
      },{
        name: 'BNP Paribas Cardif',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 1
      },{
        name: 'Grand Est Europe',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 2
      },{
        name: 'Ile de France',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 2
      },{
        name: 'BRED',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 3
      },{
        name: 'Val de France',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId : 3
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('agencies', null, {});
  }
};
