'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phieu_goi_mon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phieu_goi_mon.init({
    id_ban: DataTypes.INTEGER ,
    thoi_gian_goi: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Phieu_goi_mon',
  });
  return Phieu_goi_mon;
};