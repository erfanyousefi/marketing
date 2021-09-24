module.exports = (sequelize, Sequelize) => {
    const BuyLinkMarketer = sequelize.define("buy_link_marketers", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        productCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return BuyLinkMarketer;
};