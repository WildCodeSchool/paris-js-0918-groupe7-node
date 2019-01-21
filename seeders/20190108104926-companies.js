'use strict';

console.log(process.env);

const model = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return model.companies.bulkCreate([{
        name: 'Accor',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'ACI Worldwide',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'AG2R la mondiale',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'AI Amana',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'AI Barid Bank',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Allianz',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Altice',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Amundi',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Apicil',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Aviva',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Awbe',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'AXA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Banque Courtois',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Banque Populaire',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Banco Populare',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Bank of Scotland',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Banque Palatine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Banque Révillon',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Barclays',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'BCA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'BCP Maroc',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Blocs & Compagnie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'BMCE',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'BNL',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'BNPP',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Branchet',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Bytel',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Caisse d\'épargne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Carmignac',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Carrefour',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Cattolica',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'CIMR',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Cofidis',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Cdiscount',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Club Avantage',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'COVEA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Crédit Agricole',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Crédit Coopératif',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Crédit du Nord',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Crédit Foncier',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Crédit Mutuel',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'DAS',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Diagonal Capital',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'E Leclerc',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'ELBA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Euler Hermes',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Finance Innovation',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Fiducial',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'France DO',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Generali',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Groupama',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Groupe Casino',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Groupe la Poste',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Groupement cartes bancaires',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Harmonie mutuelle',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'HSBC',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Hulanis Novalis',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Iccrea Banca',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Idemia',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Klepierre',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Klesia - Madom',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'La Nef',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Laser',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Macif',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'MACSF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'MAIF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Malakoff Meredic',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Margo Bank',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Mastercard',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'MFP Services',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'La Mutuelle Générale',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'MGEN',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'MNT',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Mutualité Française',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'N26',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Natixis',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Octo Telematics',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'OFI',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'ONEY',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Orange',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Paris&Co',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Perceva',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Raiffeisen Bank',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Real Mutua',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'RMA Watanya',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Saham',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'SFR',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Société Général',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'SNCF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Sodexo',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'SuissLife',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Thélem',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'UBI',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'UFF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'UNA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Unibail',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Uniformation',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Zurich',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'iBP',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'IT-CE',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Le Crédit Lyonnais',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'Exton',
        is_active: 0,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },{
        name: 'WildCodeSchool',
        is_active: 0,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('companies', null, {});
  }
};
