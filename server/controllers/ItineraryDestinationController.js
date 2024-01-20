const ItineraryDestinationService = require('../services/ItineraryDestinationService.js');
const db = require("../models");


const addItineraryDestination = async (req, res) => {
    return await ItineraryDestinationService.addItineraryDestination(req.body.destinationIdArray, req.body.itineraryId)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(404).send({ message:"Error getting data", err })
        });
}

module.exports = {
    addItineraryDestination
}