'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Y_kien_kh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Y_kien_kh.init({
    id_kh: DataTypes.INTEGER,
    id_ph: DataTypes.INTEGER,
    diem_DG: DataTypes.INTEGER,
    noi_dung: DataTypes.STRING,
    thoi_gian: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Y_kien_kh',
  });
  return Y_kien_kh;
};