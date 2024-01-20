const db = require("../models");

// models
const ItineraryDestination = db.itineraryDestination;

const addItineraryDestination = async (destinationIdArray, itineraryId) => {
    const insertObject = []

    destinationIdArray.forEach(i => {
        const temp = {
            "destination_id": i,
            "itinerary_id": itineraryId
        }

        insertObject.push(temp);
    });

    console.log(insertObject);
    return await ItineraryDestination.bulkCreate(insertObject,
        { fields: ['destination_id', 'itinerary_id'] }
    );
}

module.exports = {
    addItineraryDestination
}