module.exports = function (sequelize, DataTypes) {
    var TripRestaurant = sequelize.define("TripRestaurant", {
        // tripId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // },
        // restaurantId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // }
    });
    return TripRestaurant;
};
