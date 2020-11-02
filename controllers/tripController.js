var express = require("express");

var router = express.Router();

// Import the model (trip.js) to use its database functions.
const db = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.

router.get("/api/trips", function(req, res) {
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
    }).then(function(trips) {
        res.json(trips);
        console.log(trips);
    }).catch(function(err) {
        console.log(err);
        res.send(false);
    })
});

router.post("/api/trips", function(req, res) {
    db.Trip.create(req.body, function(result) {
        // Send back the ID of the new user
        console.log(result);
    }).then(function() {
        res.json(res.body)
    }).catch()
});


// Export routes for server.js to use.
module.exports = router;