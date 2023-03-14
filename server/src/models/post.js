'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Image, {foreignKey: 'imagesId',targetKey: 'id',as : 'images'})
      Post.belongsTo(models.Nhanvien, {foreignKey: 'userId',targetKey: 'id',as : 'nhanvien'})
    }
  }
  Post.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    labelCode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributesId: DataTypes.STRING,
    categoryCode: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    overviewId: DataTypes.STRING,
    imagesId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};