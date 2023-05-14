'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   User.hasMany(models.DetailBooking, {foreignKey: 'id_kh', as: 'kh'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    dia_chi: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    gender : DataTypes.BOOLEAN,
    phan_quyen: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};