module.exports = (sequelize, Sequelize) => {
    const ticketMessage = sequelize.define("ticket_messages", {
        ticketId: {
            type: Sequelize.INTEGER,
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
        type: {
            type: Sequelize.ENUM(
                'Text',
                'Image',
                'Audio',
                'Video',
                'Doc'
            ),
            allowNull: false
        },
        text: {
            type: Sequelize.STRING,
            allowNull: true
        },
        file: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return ticketMessage;
};