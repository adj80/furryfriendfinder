'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define('Animals', {
    petCategory: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
    gender: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animals;
};