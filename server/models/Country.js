module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define(
        "country",
        {
            id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            tableName:'country',
            underscored: true,
            createdAt: false,
            updatedAt: false
        }
    );
    return Country;
};