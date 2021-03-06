var express = require("express");

var router = express.Router();

// Import the city model to use its database functions.
var db = require("../models/index.js");

// API route to get all cities to display on the homepage
router.get("/", function (req, res) {
    db.City.findAll({
        attributes: ["name"]
    }).then(function (data) {
        var hbsObject = {
            city: data.map(function (city) {
                return city.toJSON();
            })
        };
        console.log(JSON.stringify(hbsObject));
        res.render("index", hbsObject);
    }).catch(function (err) {
        console.log(err);
        res.send(false);
    });
});

// API route to find specific city where id matches req.params.id, to render on the individual city pages
router.get("/api/city/:id", function (req, res) {
    const cityInfo = db.City.findOne({
        where: {
            id: req.params.id
        },
        // Join with the sight and restaurant tables
        include: [
            {
                model: db.Sight,
                attributes: ["id", "name", "description", "image"]
            },
            {
                model: db.Restaurant,
                attributes: ["id", "name", "type", "website", "image"]
            }
        ]
    });
    // Find all users to render in the dropdown user menu on city page trip form
    const userInfo = db.User.findAll();

    Promise
        .all([cityInfo, userInfo])
        .then(function ([city, user]) {
            var hbsObject = {
                city: city,
                user: user
            };
            console.log(hbsObject);
            res.render("city-block", hbsObject);
        }).catch(function (err) {
            console.log(err);
            res.send(false);
        });
});

// Export routes for server.js to use.
module.exports = router;