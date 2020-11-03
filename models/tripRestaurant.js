module.exports = function(sequelize, DataTypes) {
    var TripRestaurant = sequelize.define("TripRestaurant", {

    });

    TripRestaurant.associate = function(models) {
        models.TripRestaurant.belongsTo(models.Trip);
        models.TripRestaurant.belongsTo(models.Restaurant);
    };

    return TripRestaurant;
};