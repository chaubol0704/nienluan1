// ten_nv: DataTypes.STRING,
//     dia_chi: DataTypes.STRING,
//     phone: DataTypes.INTEGER,
//     password: DataTypes.STRING,
//     phan_quyen: DataTypes.INTEGER,
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chi_tiet_hoa_dons', {
      id_hoa_don: {
        type: Sequelize.INTEGER
      },
      id_phieu_goi: {
        type: Sequelize.INTEGER
      },
      tien_coc: {
        type: Sequelize.FLOAT
      },
      tong_tiene: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Chi_tiet_hoa_dons');
  }
};