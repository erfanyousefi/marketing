module.exports = (sequelize, Sequelize) => {
    const buyLinkUserData = sequelize.define("buy_link_user_data", {
        buyLinkMarketerId: {
            type: Sequelize.INTEGER,
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
        productNumbers: {
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