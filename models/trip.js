module.exports = function (sequelize, DataTypes) {
    var Trip = sequelize.define("trip", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        description: {
            type: DataTypes.TEXT,
            notNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        cityId: {
            type: DataTypes.INTEGER,
            notNull: true
        }
    });
    return Trip;
};
