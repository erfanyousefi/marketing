module.exports = (sequelize, Sequelize) => {
    const discountCodeCampaign = sequelize.define("discount_code_campaigns", {
        advertiseOwnerId: {
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
        marketerLevelId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketersNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        finishDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        maxUses: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        maxUseForEachUser: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        priceRemainder: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        registeredAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return discountCodeCampaign;
};