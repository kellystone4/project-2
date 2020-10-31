'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adds seeds for Users table
    await queryInterface.bulkInsert('Users', [
      {
        name: "Kelly",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rebecca",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Andrew",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Adds seeds for Cities table
    await queryInterface.bulkInsert("Cities", [
      {
        name: "Sydney",
        description: "Australia’s most beautiful city is undoubtedly Sydney. It has some of  the world’s most beautiful beaches and sceneries, world-class restaurants and amazing experiences. Sydney has so much to offer with a wealth of diversity and beautiful landmarks, that will make your experience unforgettable!",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2F2018%2FAugust%2Fsydney.jpg&imgrefurl=https%3A%2F%2Fwww.telegraph.co.uk%2Ftravel%2Fdestinations%2Foceania%2Faustralia%2Fnew-south-wales%2Fsydney%2Farticles%2Fthings-to-do-in-sydney%2F&tbnid=FpxJWlKNyvbGvM&vet=12ahUKEwjBqaeXv9vsAhVWBDQIHU-VA4wQMygHegUIARDcAQ..i&docid=JHEJHcITfZaT6M&w=2048&h=1279&q=sydney&ved=2ahUKEwjBqaeXv9vsAhVWBDQIHU-VA4wQMygHegUIARDcAQ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Adds seeds for Restaurants table
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Cafe paci",
        type: "European",
        website: "https://www.cafepaci.com.au/",
        image: "https://www.timeout.com/sydney/restaurants/cafe-paci-1",
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
