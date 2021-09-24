module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define("tickets", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM(
                'Admin',
                'AdvertiseOwner',
                'Marketer',
            ),
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return ticket;
};