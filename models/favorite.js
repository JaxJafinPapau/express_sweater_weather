'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    location: DataTypes.STRING
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};