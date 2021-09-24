module.exports = (sequelize, Sequelize) => {
    const siteInfo = sequelize.define("site_infos", {
        price_for_block: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_sms_panel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_buy_link: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_share_link: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_introducer_code: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_discount_price_code: {
            type: Sequelize.JSON,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return siteInfo;
};