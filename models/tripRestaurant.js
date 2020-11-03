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

    TripRestaurant.associate = function (models) {
        models.TripRestaurant.belongsTo(models.Trip);
        models.TripRestaurant.belongsTo(models.Restaurant);
    };

    return TripRestaurant;
};
