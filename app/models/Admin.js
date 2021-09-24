module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define("admins", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return admin;
};