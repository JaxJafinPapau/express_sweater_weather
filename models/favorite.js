'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    location: DataTypes.STRING
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User)
  };
  return Favorite;
};
