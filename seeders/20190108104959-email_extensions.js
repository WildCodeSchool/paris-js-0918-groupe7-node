'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('email_extensions', [{
        email_extension: '@banque-de-savoie.fr',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 3
      },{
        email_extension: '@bpaca.banquepopulaire.fr',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 3
      },{
        email_extension: '@banquebcp.fr',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 2
      },{
        email_extension: '@ceacp.caisse-epargne.fr',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 2
      },{
        email_extension: '@bnpparibas.com',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 1
      },{
        email_extension: '@bnpparibas-pf.com',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
        companyId: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('email_extensions', null, {});
  }
};
