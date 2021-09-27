module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define("tickets", {
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