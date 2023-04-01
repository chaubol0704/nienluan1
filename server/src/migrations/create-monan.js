
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mon_ans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_loai: {
        type: Sequelize.INTEGER
      },
      ten_mon: {
        type: Sequelize.STRING
      },
      anh_mon: {
        type: Sequelize.TEXT
      },
      gia: {
        type: Sequelize.FLOAT
      },
      mo_ta: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Mon_ans');
  }
};