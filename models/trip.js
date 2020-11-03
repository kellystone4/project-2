module.exports = function(sequelize, DataTypes) {
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

    // Trip model belongs to the User model
    // Trip model also belongs to City model
    // Trip model has a many to many relationship with Sights and Restaurants
    Trip.associate = function(models) {
        models.Trip.belongsTo(models.User);
        models.Trip.belongsTo(models.City);
        models.Trip.hasMany(models.TripSight);
        models.Trip.hasMany(models.TripRestaurant);
    };

    return Trip;
};