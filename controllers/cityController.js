var express = require("express");

var router = express.Router();

// Import the city model to use its database functions.
var db = require("../models/index.js");

// API route to find specific city where id matches req.params.id
router.get("/api/city/:id", function (req, res) {
    db.City.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        var hbsObject = {
            city: data
        };
        console.log(hbsObject);
        res.json(hbsObject);
        // Send city object to the index hbs file as response
        // res.render("index", hbsObject);
    }).catch(function (err) {
        console.log(err);
        res.send(false);
    });
});

// Export routes for server.js to use.
module.exports = router;
