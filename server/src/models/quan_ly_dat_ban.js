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
      Quan_ly_dat_ban.belongsTo(models.Ban, {foreignKey: 'id_ban',targetKey: 'id',as : 'ban'})
      Quan_ly_dat_ban.hasMany(models.DetailBooking, {foreignKey: 'id_book', as: 'bookban'})
    }
  }
  Quan_ly_dat_ban.init({
    id_ban: DataTypes.INTEGER,
    so_nguoi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quan_ly_dat_ban',
  });
  return Quan_ly_dat_ban;
};