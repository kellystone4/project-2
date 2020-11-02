var express = require("express");

var router = express.Router();

// Import the model (trip.js) to use its database functions.
const db = require("../models/index.js");

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

router.post("/api/trips", function (req, res) {
    db.Trip.create(req.body)
        .then(function (trip) {
            // Send back the ID of the new user
            console.log(trip);
            res.json(trip)
        }).catch(function (err) {
            console.log(err);
            res.send(false);
        })
});


// Export routes for server.js to use.
module.exports = router;