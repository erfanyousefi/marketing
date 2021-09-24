module.exports = (sequelize, Sequelize) => {
    const buyLinkUserData = sequelize.define("buy_link_user_data", {
        buy_link_marketer_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postal_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        product_numbers: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        product_campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return buyLinkUserData;
};