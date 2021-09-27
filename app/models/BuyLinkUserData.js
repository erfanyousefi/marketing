module.exports = (sequelize, Sequelize) => {
    const buyLinkUserData = sequelize.define("buy_link_user_data", {
        buyLinkMarketerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postal_code: {
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

    return buyLinkUserData;
};