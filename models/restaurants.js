module.exports = function (sequelize, DataTypes) {
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
        },
        // city_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "Cities",
        //         key: "id"
        //     },
        //     allowNull: false
        // }
    });

    // We're saying that a Resaurant should belong to an City and has a many to many relationship with Trip
    Restaurant.associate = function (models) {
        Restaurant.belongsTo(models.City, { allowNull: false });
        models.Restaurant.hasMany(models.TripRestaurant);
    };

    return Restaurant;
};