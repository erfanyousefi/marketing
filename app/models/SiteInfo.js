module.exports = (sequelize, Sequelize) => {
    const siteInfo = sequelize.define("site_infos", {
        priceForBlock: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForSMSPanel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForBuyLink: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForShareLink: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForIntroducerCode: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForDiscountPriceCode: {
            type: Sequelize.JSON,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return siteInfo;
};