module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("products", {
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
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        numbers: {
            type: Sequelize.INTEGER,
            allowNull: false
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

    return product;
};