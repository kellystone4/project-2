module.exports = function (sequelize, DataTypes) {
    var Sight = sequelize.define("Sight", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        description: {
            type: DataTypes.TEXT,
            notNull: true
        },
        image: {
            type: DataTypes.TEXT,
            notNull: true
        }
    });

    // We're saying that a Sight should belong to an City and that it has a many to many relationship with Trips
    Sight.associate = function (models) {
        Sight.belongsTo(models.City);
        models.Sight.hasMany(models.TripSight);
    };

    return Sight;
};