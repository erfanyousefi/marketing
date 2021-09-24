module.exports = (sequelize, Sequelize) => {
    const introducerCodeMarketer = sequelize.define("introducer_code_marketers", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        linkCampaignId: {
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