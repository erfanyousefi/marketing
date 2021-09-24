module.exports = (sequelize, Sequelize) => {
    const SMSPanelMarketer = sequelize.define("sms_panel_marketers", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        productCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return SMSPanelMarketer;
};