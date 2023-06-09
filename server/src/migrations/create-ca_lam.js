// ten_nv: DataTypes.STRING,
//     dia_chi: DataTypes.STRING,
//     phone: DataTypes.INTEGER,
//     password: DataTypes.STRING,
//     phan_quyen: DataTypes.INTEGER,
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ca_lams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten_ca: {
        type: Sequelize.STRING
      },
      gio_bat_dau: {
        type: Sequelize.DATE
      },
      gio_ket_thuc: {
        type: Sequelize.DATE
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
        // default: Date.now()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ca_lams');
  }
};