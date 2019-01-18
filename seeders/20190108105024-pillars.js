'use strict';
process.env.NODE_ENV === 'production';
const model = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return model.pillars.bulkCreate([{
        name: 'Client',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Company',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Culture',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Code',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pillars', null, {});
  }
};
