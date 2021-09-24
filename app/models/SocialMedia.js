module.exports = (sequelize, Sequelize) => {
    const socialMedia = sequelize.define("social_medias", {
        marketer_id: {
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
        },
        registeredBy: {
            type: Sequelize.UUID,
            allowNull: true
        },
    }, {
        timestamps: true,
        paranoid: true
    });

    return socialMedia;
};