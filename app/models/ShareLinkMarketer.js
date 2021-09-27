module.exports = (sequelize, Sequelize) => {
    const shareLinkMarketer = sequelize.define("share_link_marketers", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        linkCampaignId: {
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

    return shareLinkMarketer;
};