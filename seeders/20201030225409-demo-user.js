'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adds seeds for Users table
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Kelly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rebecca',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andrew',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Adds seeds for Cities table
    await queryInterface.bulkInsert('Cities', [
      {
        name: 'Sydney',
        description: 'Syndey description',
        image: "this is the image",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Adds seeds for Restaurants table
    await queryInterface.bulkInsert('Restaurants', [
      {
        name: 'Syndey Restaurant',
        type: 'Fusion',
        website: "this is the url",
        image: "this is the image",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Reverts seeds for all tables
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Restaurants', null, {});
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
