'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('answers_possibilities', [{
        answer: 'Yes',
        weight: 8,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 1,
      },{
        answer: 'No',
        weight: 0,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 1,
      },{
        answer: 'I don\'t know',
        weight: 0,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 1,
      },{
        answer: 'Strongly Disagree',
        weight: 0,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 2,
      },{
        answer: 'Disagree',
        weight: 2,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 2,
      },{
        answer: 'Agree',
        weight: 4,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 2,
      },{
        answer: 'Strongly agree',
        weight: 8,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 2,
      },{
        answer: 'Don\'t know',
        weight: 0,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 2,
      },{
        answer: 'Never',
        weight: 0,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 3,
      },{
        answer: '1 month',
        weight: 2,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 3,
      },{
        answer: '6 months',
        weight: 2,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 3,
      },{
        answer: '1 year',
        weight: 4,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 3,
      },{
        answer: 'Over 2 years',
        weight: 8,
        order: 'true',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        answersTypeId: 3,
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('answers_possibilities', null, {});
  }
};
