module.exports = function (sequelize, DataTypes) {
    // Define restaurant model
    var Restaurant = sequelize.define("Restaurant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    // Many restaurants belong to one city
    // A restaurant can be on multiple trips, a trip can have multiple restaurants
    Restaurant.associate = function (models) {
        models.Restaurant.belongsTo(models.City, { allowNull: false });
        models.Restaurant.hasMany(models.TripRestaurant);
    };

    return Restaurant;
};