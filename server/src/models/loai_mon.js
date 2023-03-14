'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loai_mon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Loai_mon.hasMany(models.Mon_an, {foreignKey: 'id_loai', as: 'loai'})

    }
  }
  Loai_mon.init({
    ten_loai: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Loai_mon',
  });
  return Loai_mon;
};