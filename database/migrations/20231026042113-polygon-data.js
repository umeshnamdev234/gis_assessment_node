'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS postgis;');
    await queryInterface.createTable('polygon_data', 
    { 
      id: {
        allowNull: false, 
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
      },
      name : {
        type : Sequelize.STRING
      },
      geometry : {
        type : Sequelize.GEOMETRY('POLYGON')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('polygon_data');
  }
};
