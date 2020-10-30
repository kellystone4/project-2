module.exports = function (sequelize, DataTypes) {
    var tripRestaurant = sequelize.define("tripRestaurant", {
        tripId: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            notNull: true
        }
    });
    return tripRestaurant;
};
