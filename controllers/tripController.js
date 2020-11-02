var express = require("express");

var router = express.Router();

// Import the model (trip.js) to use its database functions.
const db = require("../models/index.js");
const trip = require("../models/trip.js");

// Create all our routes and set up logic within those routes where required.

router.get("/api/trips", function (req, res) {
    db.Trip.findAll({
        // Join with the user and city tables
        include: [{
            model: db.User,
            as: "User",
            attributes: ["name"]
        },
        {
            model: db.City,
            as: "City",
            attributes: ["name"]
        }
        ]
    }).then(function (data) {
        // res.json(data);
        // console.log(data);
        var hbsObject = {
            trip: data
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
            // Add trip restaurants to restaurant
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
})
// Example post request
// {
//     "name":"NEW TRIP",
//     "description": "LONDON LONDON",
//     "CityId": 3,
//     "UserId": 2,
//     "restaurantId": [8, 9, 10],
//     "sightId": [1, 2, 13]
// }


// Export routes for server.js to use.
module.exports = router;