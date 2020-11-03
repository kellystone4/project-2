module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the User model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models) {
        // Associating User with Trips
        User.hasMany(models.Trips, {

        });
    };

    return User;
};