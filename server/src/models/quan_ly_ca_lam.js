'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quan_ly_ca_lam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quan_ly_ca_lam.init({
    id_nv: DataTypes.INTEGER,
    id_ca: DataTypes.INTEGER,
    ngay: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Quan_ly_ca_lam',
  });
  return Quan_ly_ca_lam;
};