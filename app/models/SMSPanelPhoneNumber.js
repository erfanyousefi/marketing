module.exports = (sequelize, Sequelize) => {
    const SMSPanelPhoneNumber = sequelize.define("sms_panel_phone_numbers", {
        smsPanelMarketerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        productCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return SMSPanelPhoneNumber;
};