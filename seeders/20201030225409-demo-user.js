'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        // Adds seeds for Users table
        await queryInterface.bulkInsert('Users', [{
                name: "Kelly",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Kerwin",
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
        await queryInterface.bulkInsert("Cities", [{
                name: "Sydney",
                description: "Australia’s most beautiful city is undoubtedly Sydney. It has some of  the world’s most beautiful beaches and sceneries, world-class restaurants and amazing experiences. Sydney has so much to offer with a wealth of diversity and beautiful landmarks, that will make your experience unforgettable!",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hong Kong",
                description: "Futuristic skyscrapers set against a shimmering harbor. The sound of MTR trains zipping below the streets. The smell of BBQ pork hanging in shop windows. Hong Kong makes a first impression like no other place on Earth. The former British Crown Colony is prime for urban adventure; from the neon-lit streets of Lan Kwai Fong to the sandy beach of Repulse Bay, you will never run out of sights to discover.",
                image: "https://images.unsplash.com/photo-1558961166-9c584702dcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
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
                image: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2016/08/8029992599_e2d67f2425_b.jpg",
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
        console.log("Cities: " + cityRows);

        // Get user ids from the users table
        const userIds = await queryInterface.sequelize.query(
            "SELECT id from Users;"
        )

        // Create variable to access user ids to use for associations in seeds
        const userRows = userIds[0];
        console.log("Users: " + userRows)
            // --------------------------------------------------------------------------------------------

        // Adds seeds for Sights table
        await queryInterface.bulkInsert("Sights", [{
                name: "Bondi Beach",
                description: "Bondi Beach offers iconic surf beaches and cafes along Hall Street. This beachside suburb attracts thousands of visitors every day with its white sandy beaches and safe swimming conditions.",
                image: "https://images.unsplash.com/photo-1538312611088-d83e362efe66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "Syndey Opera House",
                description: "This Opera House is one of the most photographed buildings in the whole, and is known for it's unique structure. Sydney Opera House is the city's most famous landmark.",
                image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "Sydney Harbour Bridge",
                description: "Close to the Sydney Opera House, this arch bridge across Sydney Harbor is one of the most visited and iconic sights to see in the city. ",
                image: "https://images.unsplash.com/photo-1531033056439-63578c0d9f22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "The Peak",
                description: "Hong Kong's number one tourist destination features the peak Tower and the Peak Tram, the city's oldest mode of public transport. Come here for stunning views of the whole city.",
                image: "https://media.timeout.com/images/105150213/630/472/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "The Big Buddah",
                description: "The Big Buddah, also known as Tian Tan Buddah, is famed as the most iconic attraction of Lantau. It's the second largest outdoor bronze seated Buddah.",
                image: "https://media.timeout.com/images/103814201/630/472/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "Temple Street Night Market",
                description: "The fun begins around 8:00 PM, when visitors flock to the numerous stalls lining this bustling, open-air market, stocking everything from clothes to mobile phones to watches.",
                image: "https://media.timeout.com/images/105643791/630/472/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "Borough Market",
                description: "A historic and gorgeous food market in a spot that has hosted a market almost since the time of the Magna Carta.",
                image: "https://cdn.shopify.com/s/files/1/2537/0738/articles/borough-market_4d8edbb4-9899-4686-a03a-e6c325994139_1024x1024.jpg?v=1516018504",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Tower of London",
                description: "Discover London’s castle – a secure fortress, royal palace and infamous prison where you can explore 1000 years of history. Prepare to be dazzled by the breathtaking, world famous Crown Jewels. Take a Yeoman Warder tour and hear captivating stories of pain and passion, treachery and torture. Meet the famous ravens and discover why they are known as the guardians of the Tower and marvel at the imposing White Tower, a magnificent example of Normal architecture at the heart of the Tower of London.",
                image: "https://evanevanstours.com/blog/wp-content/uploads/2019/12/tower-of-london.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Tate Modern",
                description: "A visit to London isn't complete without a trip to Tate Modern. Tate Modern is Britain's national museum of modern and contemporary art from around the globe, and the world’s most visited contemporary art gallery. Housed in the former Bankside Power Station on the banks of the Thames, the awe-inspiring Turbine Hall is the dramatic setting for new art commissions. The collection is free to visit and you can see great works of art from Louise Bourgeois, Yayoi Kusama, Henri Matisse, Cornelia Parker, Pablo Picasso, and Mark Rothko – to name a few.",
                image: "https://www.tate.org.uk/sites/default/files/styles/width-600/public/tanks_staircase_tate_modern_3_1.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Central Park",
                description: "Central park is an iconic must-see park, located between the upper and upper east sides of Manhattan. It is the most visited park in the United States, with an estimated 30 million visitors annually. It is also the most filmed location in the world!",
                image: "https://thumbs-prod.si-cdn.com/dHJRMB2t4W_sEpa9YnUrgjlB184=/fit-in/1600x0/https://public-media.si-cdn.com/filer/8c/08/8c087dbd-dfd0-446e-8f30-c964de6e87c9/central-park.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Statue of Liberty",
                description: "The Statue of Liberty was a gift from the French people commemorating the alliance of France and the United States during the American Revolution as a sign up hope and friendship…it is 305 feet 1 inch from the group level up to it’s torch and see’s 3.2 million visitors every year.",
                image: "https://media.cntraveler.com/photos/5948071e494db63f5b6160aa/16:9/w_1280,c_limit/statue-of-liberty-GettyImages-539667859.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Empire State Building",
                description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. It was built from 1930 to 1931. Its name is derived from 'Empire State', the nickname of the state of New York.",
                image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.history.com%2F.image%2Ft_share%2FMTU3ODc3NjU2NzUxNTgwODk1%2Fthis-day-in-history-05011931---empire-state-building-dedicated.jpg&imgrefurl=https%3A%2F%2Fwww.history.com%2Fthis-day-in-history%2Fempire-state-building-dedicated&tbnid=5IlznHtmJtTLpM&vet=12ahUKEwjS0Py6otrsAhXKnJ4KHWFQD94QMygDegUIARDZAQ..i&docid=5nQp3KfRr6LG2M&w=1200&h=675&q=empire%20state%20building&ved=2ahUKEwjS0Py6otrsAhXKnJ4KHWFQD94QMygDegUIARDZAQ",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Eiffel Tower",
                description: "Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride.",
                image: "https://www.qantas.com/content/dam/travelinsider/images/trending/eiffel-tower-park/eiffel-one.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "Louvre Museum",
                description: "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement. Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters.",
                image: "https://t1.gstatic.com/images?q=tbn:ANd9GcRuA7eHm1m22taUbKIO2h5AF1IfD_-55ylPg7HUM-Q4IDIQ5ofbuLesjRuq5USD1hNuie0oqAXWMBHDPPIb49OsUw",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "Cathédrale Notre-Dame de Paris",
                description: "Notre-Dame de Paris, referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. The cathedral was consecrated to the Virgin Mary and considered to be one of the finest examples of French Gothic architecture.",
                image: "https://t1.gstatic.com/images?q=tbn:ANd9GcTP7Kev8E9D4tRQx70zbwJejhXbrWDSHe4YPnZRm2_iF3yXnB-J8_f6BbJov2HUz1IWVM2tpRLR2QEqkfyEkIsX1Q",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "Burj Khalifa",
                description: "Described as both a ‘Vertical City’ and ‘A Living Wonder,’ Burj Khalifa, developed by Dubai-based Emaar Properties PJSC, is the world’s tallest building. Rising gracefully from the desert, Burj Khalifa honours the city with its extraordinary union of art, engineering and meticulous craftsmanship. At 828 metres (2,716.5 ft), the 200 plus storey Burj Khalifa has 160 habitable levels, the most of any building in the world.",
                image: "https://www.timeoutdubai.com/public/images/2019/07/02/Burj-Khalifa.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            },
            {
                name: "Dubai Fountain",
                description: "Choreographed to music, the Dubai Fountain shoots water as high as 500 feet –that’s as high as a 50-story building. Designed by creators of the Fountains of Bellagio in Vegas, Dubai Fountain Performances occur daily on the 30-acre Burj Khalifa Lake.",
                image: "https://mywowo.net/media/images/cache/dubai_dubai_fontain_01_presentazione_jpg_1200_630_cover_85.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            },
            {
                name: "Burj Al Arab",
                description: "The distinctive sail-shaped silhouette of Burj Al Arab Jumeirah is more than just a stunning hotel, it is a symbol of modern Dubai. Rising on a man-made island, 280 metres from the shores of the renowned Jumeirah beach and designed to resemble the graceful sail of an Arabian dhow, it soars to a height of 321 metres, dominating Dubai’s coastline. The all-suite hotel offers 201 luxury duplexes with stunning views of the ocean, private beach access, luxury leisure on a breathtaking terrace with pools and cabanas as well as 9 of the world’s best dining and entertainment venues helmed by Michelin-starred chefs.",
                image: "https://images.memphistours.com/large/9d5dedbb687073bc4da3924e1613b491.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            }
        ], {});

        // Adds seeds for Restaurants table
        await queryInterface.bulkInsert("Restaurants", [{
                name: "Cafe Paci",
                type: "European",
                website: "https://www.cafepaci.com.au/",
                image: "https://cdn.broadsheet.com.au/cache/69/85/69853206a840b715b2b00bdbfc9483f4.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "Sang by Mabasa",
                type: "Korean",
                website: "https://www.sangbymabasa.com.au/",
                image: "https://img.delicious.com.au/jAji-f-3/w759-h506-cfill/del/2018/10/sang-surry-hills-89870-3.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "Tetsuya's Restaurant",
                type: "Fine Dining",
                website: "https://tetsuyas.com/",
                image: "https://www.goodfood.com.au/content/dam/images/h/1/1/t/e/x/image.related.articleLeadwide.620x349.h1204f.png/1530170666041.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[0].id
            },
            {
                name: "Tim Ho Wan",
                type: "Dim Sum",
                website: "http://www.timhowan.com/",
                image: "https://i.pinimg.com/originals/bc/aa/07/bcaa07b2088069699be08235a379cad4.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "Yardbird",
                type: "Japanese",
                website: "http://yardbirdrestaurant.com/info/",
                image: "https://media.timeout.com/images/103302677/630/472/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "Ho Hung Kee",
                type: "Chinese",
                website: "https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/ho-hung-kee",
                image: "https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/de7fa16e-3cda-432e-b54b-38d30e1d3979.jpg?width=1000",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[1].id
            },
            {
                name: "Dishoom",
                type: "Indian",
                website: "https://www.dishoom.com/",
                image: "https://images.prismic.io/dishoom/a4c81b86a4403b69d2093ceb6503c189d1eeb430_food_spread.jpg?auto=compress,format",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Smoking Goat Shoreditch",
                type: "Thai",
                website: "https://www.smokinggoatbar.com/",
                image: "https://media.timeout.com/images/105152826/1372/772/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Nest",
                type: "British",
                website: "https://www.nestfood.co.uk/",
                image: "https://media.timeout.com/images/105205479/1372/772/image.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[2].id
            },
            {
                name: "Via Carota",
                type: "Italian",
                website: "http://www.viacarota.com/",
                image: "https://pyxis.nymag.com/v1/imgs/0b4/384/cd804ebb2bbfe8d07a65e7935d7d325d9b-via-carota-1.rsocial.w1200.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Atoboy",
                type: "Korean",
                website: "http://atoboynyc.com/",
                image: "https://static01.nyt.com/images/2017/05/10/dining/10REST-ATOBOY-slide-V2CZ/10REST-ATOBOY-slide-V2CZ-jumbo.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Superiority Burger",
                type: "American",
                website: "http://www.superiorityburger.com/",
                image: "https://m.media-amazon.com/images/G/01/DeveloperBlogs/AmazonBookReview/Seira/MenuCloseUp._CB474605063_.jpg?t=true",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[3].id
            },
            {
                name: "Pur’ - Jean-François Rouquette",
                type: "Fine Dining",
                website: "https://www.paris-restaurant-pur.fr/?src=prop_gmb_seo_purjfr",
                image: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/addec800-3e93-4cff-9cee-9466c66c4bb8/50de189c-f22a-4b42-baed-78171710377f.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "Sebastien Gaudard",
                type: "Pastery",
                website: "http://www.sebastiengaudard.com/",
                image: "https://madaboutparis.com/sites/default/files/patisseries-hd-michael-adeloc1.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "Comice",
                type: "Haute Cuisine",
                website: "https://comice.paris/",
                image: "https://static01.nyt.com/images/2020/01/03/travel/03Paris-FivePlaces2/03Paris-FivePlaces2-mobileMasterAt3x-v2.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[4].id
            },
            {
                name: "SALT",
                type: "Burgers",
                website: "https://www.find-salt.com/",
                image: "https://media.cntraveler.com/photos/5aa179033b65146bc1432249/master/w_1600%2Cc_limit/Salt_Anne-Sophie-Heist_2018_ASH_18-02-25__10A2399.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            },
            {
                name: "TOMO",
                type: "Japanese",
                website: "https://www.tomo.ae/",
                image: "https://media.cntraveler.com/photos/5a85acc07211e1293261ced0/master/w_1600%2Cc_limit/Tomo__2018_Tomo-Terrace.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            },
            {
                name: "La Serre Bistro & Boulangerie",
                type: "French",
                website: "https://www.laserre.com/",
                image: "https://media.cntraveler.com/photos/5a85acbf86e4b63c297d482c/master/w_1600%2Cc_limit/La-Serre__2018_219A8972.jpg",
                createdAt: new Date(),
                updatedAt: new Date(),
                CityId: cityRows[5].id
            }
        ], {});

        // Adds seeds for Trip table
        await queryInterface.bulkInsert("Trips", [{
                name: "Trip Downunder",
                description: "Trip to visit Sydney next year",
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: userRows[0].id,
                CityId: cityRows[0].id
            },
            {
                name: "Derp'n in Dubai",
                description: "Time to checkout Dubai",
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: userRows[1].id,
                CityId: cityRows[5].id
            },
            {
                name: "London Calling",
                description: "Trip to London to see friends",
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: userRows[2].id,
                CityId: cityRows[2].id
            },
            {
                name: "Aussie Trip",
                description: "I derp around the world to pet KOALAS!",
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: userRows[1].id,
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
        console.log(tripRows);
        // --------------------------------------------------------------------------------------------

        // Adds seeds for TripSights table
        await queryInterface.bulkInsert("TripSights", [{
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
            },
            {
                SightId: sightRows[15].id,
                TripId: tripRows[3].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[16].id,
                TripId: tripRows[3].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[6].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[7].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[8].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[0].id,
                TripId: tripRows[1].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SightId: sightRows[1].id,
                TripId: tripRows[1].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});

        // Adds seeds for TripRestaurants table
        await queryInterface.bulkInsert("TripRestaurants", [{
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
            },
            {
                RestaurantId: sightRows[15].id,
                TripId: tripRows[3].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[16].id,
                TripId: tripRows[3].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[6].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[7].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[8].id,
                TripId: tripRows[2].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[1].id,
                TripId: tripRows[1].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                RestaurantId: sightRows[2].id,
                TripId: tripRows[1].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
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