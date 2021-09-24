module.exports = (sequelize, Sequelize) => {
    const marketerLevel = sequelize.define("marketer_levels", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return marketerLevel;
};