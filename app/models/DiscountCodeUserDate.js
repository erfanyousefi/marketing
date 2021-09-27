module.exports = (sequelize, Sequelize) => {
    const discountCodeUserDate = sequelize.define("discount_code_user_date", {
        discountCodeMarketerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        discountCodeCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return discountCodeUserDate;
};