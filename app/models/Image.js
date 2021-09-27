module.exports = (sequelize, Sequelize) => {
    const image = sequelize.define("images", {
        model: {
            type: Sequelize.ENUM(
                'Product',
                'LinkCampaign',
                'ProductCampaign',
                'DiscountCodeCampaign',
            ),
            allowNull: false
        },
        modelId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return image;
};