var express = require("express");

var router = express.Router();

// Import the city model to use its database functions.
var db = require("../models/index.js");

// API route to get all cities
router.get("/", function (req, res) {
    db.City.findAll({
        attributes: ["name"]
    }).then(function (data) {
        var hbsObject = {
            city: data.map(function (City) {
                return City.toJSON();
            })
        };
        console.log(JSON.stringify(hbsObject));
        res.render("index", hbsObject);
    }).catch(function (err) {
        console.log(err);
        res.send(false);
    });
});

// API route to find specific city where id matches req.params.id
router.get("/api/city/:id", function (req, res) {
    db.City.findOne({
        where: {
            id: req.params.id
        },
        // Join with the sight and restaurant tables
        include: [
            {
                model: db.Sight,
                attributes: ["name", "description", "image"]
            },
            {
                model: db.Restaurant,
                attributes: ["name", "type", "website", "image"]
            }
        ]
    }).then(function (data) {
        var hbsObject = {
            city: data
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
