module.exports = function(sequelize, DataTypes) {
    var Sight = sequelize.define("Sights", {
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

    Sight.associate = function(models) {
        // We're saying that a Sight should belong to an City
        // A Sight can't be created without an Author due to the foreign key constraint
        Sight.belongsTo(models.City, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Sight;
};