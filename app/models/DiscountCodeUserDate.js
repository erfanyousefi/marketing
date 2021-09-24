module.exports = (sequelize, Sequelize) => {
    const discountCodeUserDate = sequelize.define("discount_code_user_date", {
        discount_code_marketer_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        discount_code_campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return discountCodeUserDate;
};