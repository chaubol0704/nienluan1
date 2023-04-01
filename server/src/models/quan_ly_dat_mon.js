'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quan_ly_dat_mon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quan_ly_dat_mon.belongsTo(models.Mon_an, {foreignKey: 'id_mon',targetKey: 'id',as : 'mon'})
      Quan_ly_dat_mon.hasMany(models.DetailBooking, {foreignKey: 'id_bookMenu', as: 'bookmon'})
    }
  }
  Quan_ly_dat_mon.init({
    id_mon: DataTypes.INTEGER,
    don_gia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quan_ly_dat_mon',
  });
  return Quan_ly_dat_mon;
};