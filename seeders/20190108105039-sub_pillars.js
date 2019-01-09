'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('sub_pillars', [{
        name: 'Client centricity',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
      },{
        name: 'Client collaboration',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
      },{
        name: 'Tools',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 1,
      },{
        name: 'Agile organization',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
      },{
        name: 'Agile teams and skills',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
      },{
        name: 'Agile frameworks application',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 2,
      },{
        name: 'Management vision and support',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
      },{
        name: 'Agile Mindset and awareness',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
      },{
        name: 'Agile HR promotion',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 3,
      },{
        name: 'Coding methodologies',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4
      },{
        name: 'Collaborative development',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4,
      },{
        name: 'IT capabilities',
        is_active : 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        pillarId : 4,
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('sub_pillars', null, {});
  }
};
