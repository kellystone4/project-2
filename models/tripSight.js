module.exports = function(sequelize, DataTypes) {
    var TripSight = sequelize.define("TripSight", {

    });

    TripSight.associate = function(models) {
        models.TripSight.belongsTo(models.Trip);
        models.TripSight.belongsTo(models.Sight);
    };

    return TripSight;
};