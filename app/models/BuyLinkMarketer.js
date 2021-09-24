module.exports = (sequelize, Sequelize) => {
    const buyLinkMarketer = sequelize.define("buy_link_marketers", {
        marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        product_campaign_id: {
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

    return buyLinkMarketer;
};