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
        name: "Andrew",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rebecca",
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
      },
      {
        name: "Hong Kong",
        description: "Futuristic skyscrapers set against a shimmering harbor. The sound of MTR trains zipping below the streets. The smell of BBQ pork hanging in shop windows. Hong Kong makes a first impression like no other place on Earth. The former British Crown Colony is prime for urban adventure; from the neon-lit streets of Lan Kwai Fong to the sandy beach of Repulse Bay, you will never run out of sights to discover.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg/900px-Hong_Kong_Harbour_Night_2019-06-11.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "London",
        description: "London is as much about wide-open vistas and leafy landscape escapes as it is high-density, sight-packed urban exploration. Central London is where the major museums, galleries and most iconic sights congregate, but visit Hampstead Heath or the Queen Elizabeth Olympic Park to flee the crowds and frolic in wide open green expanses. You can also venture further out to Kew Gardens, Richmond or Hampton Court Palace for beautiful panoramas of riverside London followed by a pint in a quiet waterside pub.",
        image: "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New York",
        description: "Luxe hotels. Gritty dive bars. Broadway magic. Side-street snack carts. Whether you’re a first-time traveler or a long-time resident, NYC is a city that loves to surprise. The unrivaled mix of iconic arts spaces, endless shopping experiences, architectural marvels, and proudly distinct neighborhoods — along with the city’s accessible 24/7 transport — means there’s always more to explore in the five boroughs.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.getyourguide.com%2Fimg%2Ftour%2F5ac513c518061.jpeg%2F146.jpg&imgrefurl=https%3A%2F%2Fwww.getyourguide.com%2Fnew-york-city-l59%2Fhalf-day-panoramic-night-tour-of-new-york-city-t151778%2F&tbnid=WiBxo9XFLCfTYM&vet=12ahUKEwi68o30n9rsAhWTiZ4KHbtUB_EQMygVegUIARD7AQ..i&docid=1ejwZ3zenzPHYM&w=798&h=532&q=new%20york&ved=2ahUKEwi68o30n9rsAhWTiZ4KHbtUB_EQMygVegUIARD7AQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paris",
        description: "Paris is unarguably one of the most beautiful cities in the world, the capital of France, of art and of fashion. There are a thousand things to do and see in Paris and however much time you have here, it won’t be enough: Climb to the top of the Eiffel Tower, stroll down the Champs Elysées, visit the Louvre, see many shows and exhibitions, or simply wander along the banks of the Seine...read in French in the Tuileries garden, and quite simply take the time to experience the Parisian way of life! Stepping into this whirlwind that takes you from frenzy to romanticism will leave you with enduring memories. You will be much more proficient in French and you will become aware of your ability to communicate in the language of Molière.",
        image: "https://www.businessoffashion.com/articles/careers/site/uploads/2018/03/augustin-de-montesquiou-426625-unsplash.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dubai",
        description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
        image: "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

    // --------------------------------------------------------------------------------------------
    // Get city ids from the cities table
    const cityIds = await queryInterface.sequelize.query(
      "SELECT id from Cities;"
    )

    // Create variable to access city ids to use for associations in seeds
    const cityRows = cityIds[0];

    // Get user ids from the users table
    const userIds = await queryInterface.sequelize.query(
      "SELECT id from Users;"
    )

    // Create variable to access user ids to use for associations in seeds
    const userRows = userIds[0];
    // --------------------------------------------------------------------------------------------

    // Adds seeds for Sights table
    await queryInterface.bulkInsert("Sights", [
      {
        name: "Bondi Beach",
        description: "Bondi Beach offers iconic surf beaches and cafes along Hall Street. This beachside suburb attracts thousands of visitors every day with its white sandy beaches and safe swimming conditions.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.atdw-online.com.au%2Fimages%2F788eb90bc6b005e8b3492b6edeabbe60.jpeg%3Frect%3D0%2C0%2C2066%2C1550%26w%3D745%26h%3D559%26%26rot%3D360&imgrefurl=https%3A%2F%2Fwww.sydney.com%2Fdestinations%2Fsydney%2Fsydney-east%2Fbondi%2Fattractions%2Fbondi-beach&tbnid=Lta2RA0RHfOJcM&vet=12ahUKEwjq_ojBydvsAhUFI30KHd6XBsYQMygBegUIARDSAQ..i&docid=u2vtIlJHt62yoM&w=745&h=559&q=bondi%20beach&ved=2ahUKEwjq_ojBydvsAhUFI30KHd6XBsYQMygBegUIARDSAQ",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      },
      {
        name: "Syndey Opera House",
        description: "This Opera House is one of the most photographed buildings in the whole, and is known for it's unique structure. Sydney Opera House is the city's most famous landmark.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe4%2FSydneyOperaHouse20182.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSydney_Opera_House&tbnid=RRnF38tZ6iugtM&vet=12ahUKEwjd_tPJydvsAhXNtZ4KHdN8CdIQMygAegUIARDNAQ..i&docid=BkVpfu1ZKTiqWM&w=5779&h=3864&q=sydney%20opera%20house&ved=2ahUKEwjd_tPJydvsAhXNtZ4KHdN8CdIQMygAegUIARDNAQ",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Close to the Sydney Opera House, this arch bridge across Sydney Harbor is one of the most visited and iconic sights to see in the city. ",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa8%2FSydney_harbour_bridge_new_south_wales.jpg%2F1200px-Sydney_harbour_bridge_new_south_wales.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSydney_Harbour_Bridge&tbnid=lfnXkQBlYn0hcM&vet=12ahUKEwjokKzMytvsAhUS7p4KHS1HBtkQMygAegUIARDGAQ..i&docid=y-ixCD_PHL9YkM&w=1200&h=690&q=sydney%20harbor%20bridge&hl=en-GB&ved=2ahUKEwjokKzMytvsAhUS7p4KHS1HBtkQMygAegUIARDGAQ",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      }
    ], {});

    // Adds seeds for Restaurants table
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Cafe Paci",
        type: "European",
        website: "https://www.cafepaci.com.au/",
        image: "https://www.timeout.com/sydney/restaurants/cafe-paci-1",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      },
      {
        name: "Sang by Mabasa",
        type: "Korean",
        website: "https://www.sangbymabasa.com.au/",
        image: "https://www.timeout.com/sydney/restaurants/sang-by-mabasa",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      },
      {
        name: "Tetsuya's Restaurant",
        type: "Fine Dining",
        website: "https://tetsuyas.com/",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.broadsheet.com.au%2Fcache%2Fc6%2Fea%2Fc6ea30e8dfd8952f06eec8e15cc1925a.jpg&imgrefurl=https%3A%2F%2Fwww.broadsheet.com.au%2Fsydney%2Frestaurants%2Ftetsuyas&tbnid=smq7KnQMVA4oQM&vet=12ahUKEwj08ciUzNvsAhUOlZ4KHQoPAjsQMygDegUIARCXAQ..i&docid=9O7QDxDyRwVyFM&w=860&h=600&q=tetsuya%27s%20restaurant&ved=2ahUKEwj08ciUzNvsAhUOlZ4KHQoPAjsQMygDegUIARCXAQ",
        createdAt: new Date(),
        updatedAt: new Date(),
        CityId: cityRows[0].id
      }
    ], {});

    // Adds seeds for Trip table
    await queryInterface.bulkInsert("Trips", [
      {
        name: "Trip Downunder",
        description: "Trip to visit Sydney next year",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[0].id,
        CityId: cityRows[0].id
      }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Get sight ids from the sights table
    const sightIds = await queryInterface.sequelize.query(
      "SELECT id from Sights;"
    )

    // Create variable to access sight ids to use for associations in seeds
    const sightRows = sightIds[0];
    console.log(sightRows);

    // Get restaurant ids from the restaurants table
    const restaurantIds = await queryInterface.sequelize.query(
      "SELECT id from Restaurants;"
    )

    // Create variable to access restaurant ids to use for associations in seeds
    const restaurantRows = restaurantIds[0];

    // Get trip ids from the trips table
    const tripIds = await queryInterface.sequelize.query(
      "SELECT id from Trips;"
    )

    // Create trip to access trip ids to use for associations in seeds
    const tripRows = tripIds[0];
    // --------------------------------------------------------------------------------------------

    // Adds seeds for TripSights table
    await queryInterface.bulkInsert("TripSights", [
      {
        SightId: sightRows[0].id,
        TripId: tripRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        SightId: sightRows[2].id,
        TripId: tripRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    // Adds seeds for TripRestaurants table
    await queryInterface.bulkInsert("TripRestaurants", [
      {
        RestaurantId: sightRows[0].id,
        TripId: tripRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        RestaurantId: sightRows[1].id,
        TripId: tripRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Reverts seeds for all tables
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Cities', null, {});
    await queryInterface.bulkDelete('Sights', null, {});
    await queryInterface.bulkDelete('Restaurants', null, {});
    await queryInterface.bulkDelete('Trips', null, {});
    await queryInterface.bulkDelete('TripSights', null, {});
    await queryInterface.bulkDelete('TripRestaurants', null, {});
  }
};
