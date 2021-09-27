module.exports = (sequelize, Sequelize) => {
    const buyLinkMarketerLevel = sequelize.define("buy_link_marketer_levels", {
        levelId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketerPercent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        parentMarketerPercent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachMarketer: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachDay: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachBuy: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return buyLinkMarketerLevel;
};