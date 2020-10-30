module.exports = function (sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        description: {
            type: DataTypes.TEXT,
            notNull: true
        }
    });

    // Trip model belongs to the User model
    // Trip model also belongs to City model
    Trip.associate = function (models) {
        Trip.belongsTo(models.User);
        Trip.belongsTo(models.City);
        models.Trip.hasMany(models.TripSight);
        models.Trip.hasMany(models.TripRestaurant);
    };

    return Trip;
};
