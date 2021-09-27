module.exports = (sequelize, Sequelize) => {
    const document = sequelize.define("documents", {
        userId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM(
                'Admin',
                'AdvertiseOwner',
                'Marketer',
            ),
            allowNull: false
        },
        file: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return document;
};