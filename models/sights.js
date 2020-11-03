module.exports = function (sequelize, DataTypes) {
    // Define model for Sights
    var Sight = sequelize.define("Sight", {
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

    // Many sights belong to one city
    // A sight can be on multiple trips, a trip can have multiple sights
    Sight.associate = function (models) {
        models.Sight.belongsTo(models.City);
        models.Sight.hasMany(models.TripSight);
    };

    return Sight;
};