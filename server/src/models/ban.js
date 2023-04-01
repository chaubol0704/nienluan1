'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ban.hasMany(models.Quan_ly_dat_ban, {foreignKey: 'id_ban', as: 'ban'})
    }
  }
  Ban.init({
    trang_thai: DataTypes.STRING,
    so_ghe: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Ban',
  });
  return Ban;
};