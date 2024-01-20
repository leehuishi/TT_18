const db = require("../models");
const _ = require('lodash');

// models
const Itinerary = db.itinerary;
const Country = db.country;
const Destination = db.destination;

const getAllItinerariesByUserId = async (userId) => {
    const itineraries = await Itinerary.findAll({
        where: { user_id: userId },
        raw: true,
        include: [{
            model: Country,
            raw: true,
            required: true,
            include: [{
                model: Destination,
                required: true
            }]
        }],
    });

    const result = {}

    itineraries.forEach(i => {
        if (! (i.id in result)) {
            const obj = _.pick(i, ['id', 'country.name', 'budget',
                'country.destinations.name']);

            obj['destinations'] = []
            obj['destinations'].push(i['country.destinations.name']);
            delete obj['country.destinations.name'];
            result[i.id] = obj;
        } else {
            result[i.id]['destinations'].push(i['country.destinations.name']);
        }
    });

    return result;
}


module.exports = {
    getAllItineraries: getAllItinerariesByUserId
}