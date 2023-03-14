// ten_nv: DataTypes.STRING,
//     dia_chi: DataTypes.STRING,
//     phone: DataTypes.INTEGER,
//     password: DataTypes.STRING,
//     phan_quyen: DataTypes.INTEGER,
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quan_ly_dat_bans', {
      id_ban_pv: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kh: {
        type: Sequelize.INTEGER
      },
      id_phieu_goi: {
        type: Sequelize.INTEGER
      },
      thoi_gian_dat: {
        type: Sequelize.DATE
      },
      tien_coc: {
        type: Sequelize.FLOAT
      },
      phan_quyen: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Quan_ly_dat_bans');
  }
};