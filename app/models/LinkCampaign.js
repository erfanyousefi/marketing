module.exports = (sequelize, Sequelize) => {
    const linkCampaign = sequelize.define("link_campaigns", {
        advertise_owner_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM(
                'ShareLink',
                'IntroducerCode'
            ),
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
        link_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketer_level_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marketers_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        days_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        click_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        act_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        register_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        price_remainder: {
            type: Sequelize.INTEGER,
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
    }, {
        timestamps: true,
        paranoid: true
    });

    return linkCampaign;
};