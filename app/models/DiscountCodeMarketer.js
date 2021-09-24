module.exports = (sequelize, Sequelize) => {
    const discountCodeMarketer = sequelize.define("discount_code_marketers", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        discountCodeCampaignId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return discountCodeMarketer;
};