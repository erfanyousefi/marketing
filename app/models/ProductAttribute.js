module.exports = (sequelize, Sequelize) => {
    const productAttribute = sequelize.define("product_attributes", {
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return productAttribute;
};