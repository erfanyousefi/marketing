module.exports = (sequelize, Sequelize) => {
    const introducerCodeMarketer = sequelize.define("introducer_code_marketers", {
        marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        link_campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        //Code is marketer_code
    }, {
        timestamps: true,
        paranoid: true
    });

    return introducerCodeMarketer;
};