module.exports = (sequelize, Sequelize) => {
    const shareLinkUserDate = sequelize.define("share_link_user_date", {
        shareLinkMarketerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        linkCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ip: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM(
                'clicked',
                'paid',
            ),
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return shareLinkUserDate;
};