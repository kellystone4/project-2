var express = require("express");

var router = express.Router();

// Import the model (trip.js) to use its database functions.
const db = require("../models/index.js");
const trip = require("../models/trip.js");

// Create all our routes and set up logic within those routes where required.

router.get("/api/trips", function (req, res) {
    db.Trip.findAll({
        include: [{
            model: db.User,
            // attributes: ["name"]
        },
        {
            model: db.City,
            // attributes: ["name"]
        }
        ]
    }).then(function (trips) {
        res.json(trips);
        console.log(trips);
    }).catch(function (err) {
        console.log(err);
        res.send(false);
    })
});

// Route for creating a new trip which includes restaurants & sights
router.post("/api/trips", function (req, res) {
    db.Trip.create(req.body)
        .then(function (trip) {
            // Add trip restaurants to restaurant
            db.TripRestaurant.create({
                RestaurantId: req.body.restaurantId,
                TripId: trip.id
            }).then(function (tripRest) {
                console.log(tripRest)
                db.TripSight.create({
                    SightId: req.body.restaurantId,
                    TripId: trip.id
                })
            }).then(function () {
                res.send(true);
            })
        }).catch(function (err) {
            console.log(err);
            res.send(false);
        })
});

// Example post request
// {
//     "name":"My London Trip",
//     "description": "Trip to London Town",
//     "CityId": 3,
//     "UserId": 2,
//     "restaurantId": 8
//  }


// Export routes for server.js to use.
module.exports = router;