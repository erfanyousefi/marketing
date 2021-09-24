module.exports = (sequelize, Sequelize) => {
    const shareLinkUserDate = sequelize.define("share_link_user_date", {
        share_link_marketer_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        link_campaign_id: {
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