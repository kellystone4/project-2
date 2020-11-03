var express = require("express");

var router = express.Router();

// Import the city model to use its database functions.
var db = require("../models/index.js");

// Route for adding new user to user table
router.post("/api/user", function (req, res) {
    db.User.create(req.body)
        .then(function (user) {
            console.log(user);
            res.json(user.id);
        }).catch(function (err) {
            console.log(err);
            res.send(false);
        });
});

// Export routes for server.js to use.
module.exports = router;
