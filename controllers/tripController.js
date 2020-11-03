var express = require("express");

var router = express.Router();

// Import the model (trip.js) to use its database functions.
const db = require("../models/index.js");

// Route to get information for all trips to render on the trips page
router.get("/api/trips", function (req, res) {
    db.Trip.findAll({
        // Join with the user, city, TripSight, and TripRestaurant 
        include: [{
            model: db.User,
            as: "User",
            attributes: ["name"]
        },
        {
            model: db.City,
            as: "City",
            attributes: ["name"]
        },
        {
            model: db.TripSight,
            include: {
                model: db.Sight,
                attributes: ["name"]
            },
        },
        {
            model: db.TripRestaurant,
            include: {
                model: db.Restaurant,
                attributes: ["name"]
            }
        }
        ]
    }).then(function (data) {
        var hbsObject = {
            trip: data.map(function (trip) {
                return trip.toJSON();
            })
        };
        console.log(hbsObject)
        res.render("saved", hbsObject);
    }).catch(function (err) {
        console.log(err);
        res.send(false);
    })
});

// Route for creating a new trip which includes restaurants & sights
router.post("/api/trips", function (req, res) {
    db.Trip.create(req.body)
        .then(function (trip) {
            // Add trip to TripRestaurants
            for (let i = 0; i < req.body.restaurantId.length; i++) {
                db.TripRestaurant.create({
                    RestaurantId: req.body.restaurantId[i],
                    TripId: trip.id
                })
                    .catch(function (err) {
                        console.log(err);
                        res.send(false);
                    })
            }
            // Add trip to TripSight
            for (let i = 0; i < req.body.sightId.length; i++) {
                db.TripSight.create({
                    SightId: req.body.sightId[i],
                    TripId: trip.id
                })
                    .catch(function (err) {
                        console.log(err);
                        res.send(false);
                    })
            }
            res.send(true);
        });
});

// Export routes for server.js to use.
module.exports = router;