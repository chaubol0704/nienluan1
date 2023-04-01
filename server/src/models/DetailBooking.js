'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailBooking.belongsTo(models.Quan_ly_dat_ban, {foreignKey: 'id_book',targetKey: 'id',as : 'bookban'})
      DetailBooking.belongsTo(models.Quan_ly_dat_mon, {foreignKey: 'id_bookMenu',targetKey: 'id',as : 'bookmon'})
      DetailBooking.belongsTo(models.Khachhang, {foreignKey: 'id_kh',targetKey: 'id',as : 'kh'})
    }
  }
  DetailBooking.init({
    id_book: DataTypes.INTEGER,
    id_bookMenu: DataTypes.INTEGER,
    id_kh: DataTypes.INTEGER,
    time_book: DataTypes.DATE,
    tien_coc: DataTypes.FLOAT,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DetailBooking',
  });
  return DetailBooking;
};