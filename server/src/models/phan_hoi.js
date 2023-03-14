'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phan_hoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phan_hoi.init({
    id_nv: DataTypes.INTEGER,
    noi_ding_PH: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Phan_hoi',
  });
  return Phan_hoi;
};