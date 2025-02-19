'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creatureModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creatureModel.init({
    id: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creatureModel',
  });
  return creatureModel;
};