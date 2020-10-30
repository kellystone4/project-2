module.exports = function (sequelize, DataTypes) {
    var Sight = sequelize.define("Sight", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    // We're saying that a Sight should belong to an City and that it has a many to many relationship with Trips
    Sight.associate = function (models) {
        Sight.belongsTo(models.City);
        models.Sight.hasMany(models.TripSight);
    };

    return Sight;
};