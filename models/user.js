module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    });

    // User.associate = function(models) {
    //   // Associating User with Trips
    //   // When an USer is deleted, also delete any associated Posts
    //   User.hasMany(models.Trips, {
    //     onDelete: "cascade"
    //   });
    // };

    return User;
};