module.exports = function (sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        type: {
            type: DataTypes.STRING,
            notNull: true
        },
        website: {
            type: DataTypes.STRING,
            notNull: true
        },
        image: {
            type: DataTypes.STRING,
            notNull: true
        }
    });

    // We're saying that a Resaurant should belong to an City and has a many to many relationship with Trip
    Restaurant.associate = function (models) {
        Restaurant.belongsTo(models.City);
        models.Restaurant.hasMany(models.TripRestaurant);
    };

    return Restaurant;
};