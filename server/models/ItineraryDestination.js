module.exports = (sequelize, Sequelize) => {
    const ItineraryDestination = sequelize.define(
        "itinerary destination",
        {
            id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            itinerary_id: {
                type: Sequelize.INTEGER,
                foreignKey: true
            },
            destination_id: {
                type: Sequelize.INTEGER,
                foreignKey: true
            }
        },
        {
            tableName:'itinerary_destination'
        }
    );

    return ItineraryDestination;
};