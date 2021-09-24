module.exports = (sequelize, Sequelize) => {
    const advertiseOwner = sequelize.define("advertise_owners", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hasPaidBlock: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false
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

    return advertiseOwner;
};