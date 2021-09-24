module.exports = (sequelize, Sequelize) => {
    const productCampaign = sequelize.define("product_campaigns", {
        advertiseOwnerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM(
                'SMSPanel',
                'BuyLink'
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
        productId: {
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
        smsNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        actNumber: {
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
        },
        registeredBy: {
            type: Sequelize.UUID,
            allowNull: true
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return productCampaign;
};