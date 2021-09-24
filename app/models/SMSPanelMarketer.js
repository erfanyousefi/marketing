module.exports = (sequelize, Sequelize) => {
    const SMSPanelMarketer = sequelize.define("sms_panel_marketers", {
        marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        product_campaign_id: {
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