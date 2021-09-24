module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("links", {
        advertiseOwnerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
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

    return Link;
};