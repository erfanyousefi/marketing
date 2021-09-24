module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define("tickets", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
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