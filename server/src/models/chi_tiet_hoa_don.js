'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chi_tiet_hoa_don extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chi_tiet_hoa_don.init({
    id_hoa_don: DataTypes.INTEGER,
    id_phieu_goi: DataTypes.INTEGER,
    tien_coc: DataTypes.FLOAT,
    tong_tien: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Chi_tiet_hoa_don',
  });
  return Chi_tiet_hoa_don;
};