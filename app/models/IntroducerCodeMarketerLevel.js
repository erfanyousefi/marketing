module.exports = (sequelize, Sequelize) => {
    const introduceLinkMarketerLevel = sequelize.define("introduce_link_marketer_level", {
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
        advertise_owner_percent: {
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
        price_for_each_register: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return introduceLinkMarketerLevel;
};