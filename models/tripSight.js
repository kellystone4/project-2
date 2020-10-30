module.exports = function (sequelize, DataTypes) {
    var tripSight = sequelize.define("tripSight", {
        tripId: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        sightId: {
            type: DataTypes.INTEGER,
            notNull: true
        }
    });
    return tripSight;
};
