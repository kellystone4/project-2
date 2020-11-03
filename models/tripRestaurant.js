module.exports = function (sequelize, DataTypes) {
    // Define TripRestaurant model, many to many relationship
    var TripRestaurant = sequelize.define("TripRestaurant", {
    });

    TripRestaurant.associate = function (models) {
        models.TripRestaurant.belongsTo(models.Trip);
        models.TripRestaurant.belongsTo(models.Restaurant);
    };

    return TripRestaurant;
};
