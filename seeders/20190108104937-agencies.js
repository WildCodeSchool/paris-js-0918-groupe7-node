'use strict';
const model = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return model.agencies.bulkCreate([{
        name: 'Alsace Lorraine Champagne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Auvergne Lorraine Champagne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Bourgogne Franche Comté',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'BRED',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Aquitaine Centre Altantique',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Grand Ouest',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Méditerranée',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'du Nord',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Occitane',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Rives de Paris',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'du Sud',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Val de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'CASDEN',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Crédit Coopératif',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 14
      },{
        name: 'Hello Bank!',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 25
      },{
        name: 'BNP Parisbas Cardif',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 25
      },{
        name: 'Cetelem',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 25
      },{
        name: 'BNP Parisbas Real Estate',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 25
      },{
        name: 'Arval',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 25
      },{
        name: 'Grand Est Europe',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Ile de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Haut de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Normandie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Bourgogne Franche Comté',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Loire Centre',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Rhone Alpes',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Bretagne Pays de Loire',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Auvergne et Limousin',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Aquitaine Poitou-Charentes',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Loire Drôme Ardèche',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Midi-Pyrénées',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Provence Alpes Corse',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Languedoc-Roussillon',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'Côte d\'Azur',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 28
      },{
        name: 'MMA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 36
      },{
        name: 'GMF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 36
      },{
        name: 'MAAF',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 36
      },{
        name: 'Alsace Vosges',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Alpes Provence',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'de l\'Anjou et du Maine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'd\'Aquitaine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Atlantique Vendée',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Brie Picardie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Centre France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Centre Loire',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Centre Ouest',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Centre Est',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Champagne Bourgogne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Charente Maritime Deux-Sèvre',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Charente Périgord',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Corse',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Cotes d\'Armor',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Normandie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Savoie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Finistère',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Franche Comté',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Guadeloupe',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'D\'ile et Vilaine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Languedoc',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Loire Haute-Loire',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Lorraine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Martinique Guyane',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Morbihan',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Nord de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Nord Est',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Nord Midi Pyrénées',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Normandie Seine',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Paris et Ile de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Provence Cote d\'Azur',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Pyrénées Gascogne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'La Réunion',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Sud Rhones Alpes',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Sud Méditerranée',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Toulouse 31',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Touraine Poitou',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Val de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'CASA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'CACIB',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'FNCA',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'LCL',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Amundi',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Indosuez',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Assurances',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Immobilier',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Corporate & Investment Bank',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'CACEIS',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Leasing & Factoring',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Consumer Finance',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Payment Services',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Pacifica',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 37
      },{
        name: 'Centre Est Europe',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Sud Est',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Ile de France',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Savoie Mont Blanc',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Midi Atlantique',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Centre',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Dauphiné Vivarais',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Loire Atlantique Centre Ouest',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Méditerranéen',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Normandie',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Anjou',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Coopération spécifique Antilles Guyane',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Targo Bank',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Arkea',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 41
      },{
        name: 'Paris Val de Loire',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Nord Est',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Grand Est',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Rhone Alpes Auvergne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Méditerranée',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Centre Manche',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'd\'Oc',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Centre Atlantique',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'Loire Bretagne',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'GAN',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 51
      },{
        name: 'la banque postale',
        is_active: 1,
        createdAt : '2019-01-21 10:00:00',
        updatedAt : '2019-01-21 10:00:00',
        companyId : 53
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('agencies', null, {});
  }
};
