module.exports = (sequelize, Sequelize) => {
    const shareLinkMarketerLevel = sequelize.define("share_panel_marketer_levels", {
        levelId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketerPercent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        parentMarketerPercent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachMarketer: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachDay: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachClick: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceForEachAct: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return shareLinkMarketerLevel;
};