const db = require("../models");

// models
const Itinerary = db.itinerary;
const Country = db.country;
const Destination = db.destination;

const getAllItinerariesByUserId = async (userId) => {
    const itineraries = await Itinerary.findAll({
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

    // console.log(itineraries[0].dataValues);
    return itineraries;
}


module.exports = {
    getAllItineraries: getAllItinerariesByUserId
}