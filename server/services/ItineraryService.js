const db = require("../models");

// models
const Itinerary = db.itinerary;
const Country = db.country;
const Destination = db.destination;

const getAllItineraries = async (userId) => {
    const itineraries = Itinerary.findAll({
        where: { user_id: userId },
        include: [{
            model: Country,
            required: true,
            include: [{
                model: Destination,
                required: true
            }]
        }],
    });
    return itineraries;
}


module.exports = {
    getAllItineraries
}