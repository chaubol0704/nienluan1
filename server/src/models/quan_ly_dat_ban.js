'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quan_ly_dat_ban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quan_ly_dat_ban.init({
    id_kh: DataTypes.INTEGER,
    id_phieu_goi: DataTypes.INTEGER,
    thoi_gian_dat: DataTypes.DATE,
    tien_coc: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Quan_ly_dat_ban',
  });
  return Quan_ly_dat_ban;
};