module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("city", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        description: {
            type: DataTypes.TEXT,
            notNull: true
        },
        image: {
            type: DataTypes.STRING,
            notNull: true
        }
    });

    City.associate = function(models) {
        // We're saying that a Sight should belong to an Trip
        // A Sight can't be created without an Author due to the foreign key constraint
        City.hasMany(models.Restaurant, {});
    };

    return City;
};