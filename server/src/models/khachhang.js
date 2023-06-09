'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Khachhang.hasMany(models.DetailBooking, {foreignKey: 'id_kh', as: 'kh'})
    }
  }
  Khachhang.init({
    name: DataTypes.STRING,
    dia_chi: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    gender : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Khachhang',
  });
  return Khachhang;
};