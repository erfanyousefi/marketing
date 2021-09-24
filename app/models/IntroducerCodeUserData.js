module.exports = (sequelize, Sequelize) => {
    const introducerCodeUserData = sequelize.define("introducer_code_user_data", {
        introducer_code_marketer_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        link_campaign_id: {
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