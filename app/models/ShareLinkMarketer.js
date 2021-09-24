module.exports = (sequelize, Sequelize) => {
    const shareLinkMarketer = sequelize.define("share_link_marketers", {
        marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        link_campaign_id: {
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