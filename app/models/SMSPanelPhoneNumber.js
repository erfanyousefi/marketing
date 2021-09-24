module.exports = (sequelize, Sequelize) => {
    const SMSPanelPhoneNumber = sequelize.define("sms_panel_phone_numbers", {
        sms_panel_marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        product_campaign_id: {
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