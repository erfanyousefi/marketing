module.exports = (sequelize, Sequelize) => {
    const ticketMessage = sequelize.define("ticket_messages", {
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
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
        file: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return ticketMessage;
};