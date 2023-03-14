'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nhanvien.hasMany(models.Post, {foreignKey: 'userId', as: 'nhanvien'})
    }
  }
  Nhanvien.init({
    name: DataTypes.STRING, 
    dia_chi: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    phan_quyen: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};