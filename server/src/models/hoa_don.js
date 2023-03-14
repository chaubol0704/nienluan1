'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hoa_don extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hoa_don.init({
    id_nv: DataTypes.INTEGER,
    id_kh: DataTypes.INTEGER,
    id_ban_pv: DataTypes.INTEGER,
    thoi_gian_lap: DataTypes.DATE,
    tong_thanh_toan: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Hoa_don',
  });
  return Hoa_don;
};