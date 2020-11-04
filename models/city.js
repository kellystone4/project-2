module.exports = function (sequelize, DataTypes) {
    // Define City model
    var City = sequelize.define("City", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    City.associate = function (models) {
        // A city has many restaurants and sights
        // A city can have many trips
        models.City.hasMany(models.Restaurant, { allowNull: false });
        models.City.hasMany(models.Sight);
        models.City.hasMany(models.Trip);
    };

    return City;
};