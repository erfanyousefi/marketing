module.exports = (sequelize, Sequelize) => {
    const BuyLinkUserData = sequelize.define("buy_link_user_data", {
        buyLinkMarketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postalCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        product_numbers: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        productCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return BuyLinkUserData;
};