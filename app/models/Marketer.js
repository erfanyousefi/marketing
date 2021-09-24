module.exports = (sequelize, Sequelize) => {
    const marketer = sequelize.define("marketers", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        level_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        parentMarketerId: {
            type: Sequelize.UUID,
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
        isBanned: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return marketer;
};