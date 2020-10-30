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

    Restaurant.associate = function (models) {
        // We're saying that a Sight should belong to an City
        // A Sight can't be created without an Author due to the foreign key constraint
        Restaurant.belongsTo(models.City);
        models.Restaurant.hasMany(models.TripRestaurant);
    };

    return Restaurant;
};