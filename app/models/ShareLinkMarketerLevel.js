module.exports = (sequelize, Sequelize) => {
    const shareLinkMarketerLevel = sequelize.define("share_panel_marketer_levels", {
        levelId: {
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
        price_for_each_click: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_for_each_act: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return shareLinkMarketerLevel;
};