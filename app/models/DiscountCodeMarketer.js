module.exports = (sequelize, Sequelize) => {
    const discountCodeMarketer = sequelize.define("discount_code_marketers", {
        marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        discount_code_campaign_id: {
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