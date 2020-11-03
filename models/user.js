module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Define author model
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        models.User.hasMany(models.Trip);
    };

    return User;
};