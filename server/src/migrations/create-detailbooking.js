 
'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //    id_book: DataTypes.INTEGER,
    // id_bookMenu: DataTypes.INTEGER,
    // id_kh: DataTypes.INTEGER,
    // time_book: DataTypes.DATE,
    // tien_coc: DataTypes.FLOAT
    await queryInterface.createTable('DetailBookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_book: {
        type: Sequelize.INTEGER
      },
      id_kh: {
        type: Sequelize.INTEGER
      },
      time_book: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      tien_coc: {
        type: Sequelize.FLOAT
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailBookings');
  }
};