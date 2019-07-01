'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
         'Favorites',//table we are adding the column too
         'UserId', //the foreign key that we are adding
         {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
       )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Favorites',
      'UserId'
    )
  }
};
