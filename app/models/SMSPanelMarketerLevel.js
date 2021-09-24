module.exports = (sequelize, Sequelize) => {
    const SMSPanelMarketerLevel = sequelize.define("sms_panel_marketer_levels", {
        level_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketer_percent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        parent_marketer_percent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_each_marketer: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_each_day: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_each_sms: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return SMSPanelMarketerLevel;
};