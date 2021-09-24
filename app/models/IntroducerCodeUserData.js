module.exports = (sequelize, Sequelize) => {
    const introducerCodeUserData = sequelize.define("introducer_code_user_data", {
        introducerCodeMarketerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        linkCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ip : {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return introducerCodeUserData;
};