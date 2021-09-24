module.exports = (sequelize, Sequelize) => {
    const productCampaign = sequelize.define("product_campaigns", {
        advertise_owner_id: {
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
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketer_level_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketers_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        days_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sms_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        act_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price_remainder: {
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