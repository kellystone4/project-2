module.exports = function (sequelize, DataTypes) {
    // Define Trip model
    var Trip = sequelize.define("Trip", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    // A trip belongs to a user
    // A trip belongs to a city
    // A trip can have many sights and a sight can be on multiple trips
    // A trip can have many restaurants and a restaurant can be on multiple trips
    Trip.associate = function (models) {
        models.Trip.belongsTo(models.User);
        models.Trip.belongsTo(models.City);
        models.Trip.hasMany(models.TripSight);
        models.Trip.hasMany(models.TripRestaurant);
    };

    return Trip;
};
