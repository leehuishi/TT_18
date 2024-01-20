module.exports = (sequelize, Sequelize) => {
    const Destination = sequelize.define(
        "destination",
        {
            id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            country_id: {
                type: Sequelize.INTEGER,
                foreignKey: true
            },
            cost: {
                type: Sequelize.FLOAT
            },
            name: {
                type: Sequelize.STRING
            },
            notes: {
                type: Sequelize.STRING
            }
        },
        {
            tableName:'destination',
            underscored: true,
            createdAt: false,
            updatedAt: false
        }
    );

    return Destination;
};