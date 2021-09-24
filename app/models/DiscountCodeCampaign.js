module.exports = (sequelize, Sequelize) => {
    const discountCodeCampaign = sequelize.define("discount_code_campaigns", {
        advertise_owner_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        marketer_level_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketers_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        start_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        finish_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        max_uses: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        max_use_for_each_user: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price_remainder: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        registeredAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        registeredBy: {
            type: Sequelize.UUID,
            allowNull: true
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return discountCodeCampaign;
};