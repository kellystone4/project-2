module.exports = function (sequelize, DataTypes) {
    var TripSight = sequelize.define("TripSight", {
        // tripId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // },
        // sightId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // }
    });

    TripSight.associate = function (models) {
        models.TripSight.belongsTo(models.Trip);
        models.TripSight.belongsTo(models.Sight);
    };

    return TripSight;
};
