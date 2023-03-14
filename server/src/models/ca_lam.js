'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ca_lam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ca_lam.init({
    ten_ca: DataTypes.STRING,
    gio_bat_dau: DataTypes.DATE,
    gio_ket_thuc: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Ca_lam',
  });
  return Ca_lam;
};