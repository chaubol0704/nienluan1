'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mon_an extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Mon_an.belongsTo(models.Loai_mon, {foreignKey: 'id_loai',targetKey: 'id',as : 'loai'})

    }
  }
  Mon_an.init({
    id_loai: DataTypes.INTEGER,
    ten_mon: DataTypes.STRING,
    anh_mon: DataTypes.TEXT,
    gia: DataTypes.FLOAT,
    mo_ta: DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'Mon_an',
  });
  return Mon_an;
};