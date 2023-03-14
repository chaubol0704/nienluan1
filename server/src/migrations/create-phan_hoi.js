// ten_nv: DataTypes.STRING,
//     dia_chi: DataTypes.STRING,
//     phone: DataTypes.INTEGER,
//     password: DataTypes.STRING,
//     phan_quyen: DataTypes.INTEGER,
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phan_hois', {
      id_ph: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_nv: {
        type: Sequelize.INTEGER
      },
      noi_dung_PH: {
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phan_hois');
  }
};