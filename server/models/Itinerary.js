module.exports = (sequelize, Sequelize) => {
    const Itinerary = sequelize.define(
        "itinerary",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            country_id: {
                type: Sequelize.INTEGER,
                foreignKey: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                foreignKey: true
            },
            budget: {
                type: Sequelize.FLOAT
            },
            title: {
                type: Sequelize.STRING
            }
        },
        {
            tableName:'itinerary',
            underscored: true,
            createdAt: false,
            updatedAt: false
        }
    );

    return Itinerary;
};