module.exports = (sequelize, Sequelize) => {
    const linkCampaign = sequelize.define("link_campaigns", {
        advertiseOwnerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM(
                'ShareLink',
                'IntroducerCode'
            ),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        linkId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketerLevelId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketersNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        daysNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        clickNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        actNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        registerNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        priceRemainder: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        registeredAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return linkCampaign;
};