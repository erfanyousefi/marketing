module.exports = (sequelize, Sequelize) => {
    const socialMedia = sequelize.define("social_medias", {
        marketerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        registeredAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return socialMedia;
};