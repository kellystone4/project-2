module.exports = function (sequelize, DataTypes) {
    // Define TripSight model, many to many relationship
    var TripSight = sequelize.define("TripSight", {
    });

    TripSight.associate = function (models) {
        models.TripSight.belongsTo(models.Trip);
        models.TripSight.belongsTo(models.Sight);
    };

    return TripSight;
};
