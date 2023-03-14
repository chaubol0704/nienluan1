'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chi_tiet_goi_mon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chi_tiet_goi_mon.init({
    id_phieu_goi: DataTypes.INTEGER,
    id_mon: DataTypes.INTEGER,
    so_luong: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chi_tiet_goi_mon',
  });
  return Chi_tiet_goi_mon;
};