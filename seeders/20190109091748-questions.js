'use strict';
const model = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return model.questions.bulkCreate([{
        question: 'Customer satisfaction is taken into account to measure the success of the initiatives of the company',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 1,
      },{
        question: 'We co-create our products with our clients (yes/ no). If yes, how ?',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 2,
      },{
        question: 'User stories are written to enhance the development of new offers and services',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 3,
      },{
        question: 'For how long have you been using an agile organization type ? (Never, 1 month ,6  months, 1 year, over 2 years)',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 4,
      },{
        question: 'Teams work together implementing collaborative visual manangement tools, or tools that anybody in the team can consult and follow (burndown charts, work in progress chart ..)',
        agile_orientation: 'Agile Adoption',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 5,
      },{
        question: 'The programs / projects are broken down into iterations, and the progress in tracked on a task board',
        agile_orientation: 'Agile Adoption',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 6,
      },{
        question: 'Top Management clearly embodies agile mindset, principles and it is fostering agile adoption',
        agile_orientation: 'Agile Adoption',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 7,
      },{
        question: 'The company has been supporting awareness on agile',
        agile_orientation: 'Agile Adoption',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 8,
      },{
        question: 'HR teams propose agile training and certifications',
        agile_orientation: 'Agile Adoption',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 9,
      },{
        question: 'A clear test strategy has been defined by the developers',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 10,
      },{
        question: 'A demo meeting is planed after the coding, with all the stakeholders of the project incl. Customer',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 11,
      },{
        question: 'The Company\'s IT architechture enables frequent iterations (access to the core server)',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 12,
      },{
        question: 'Our clients are involved in the product development',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 1,
      },{
        question: 'Customer satisfaction is taken into account to measure the success of the initiatives of the company',
        agile_orientation: 'Agile Capabilities',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        subPillarId : 2,
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('questions', null, {});
  }
};
