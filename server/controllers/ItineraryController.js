const ItineraryService = require('../services/ItineraryService');

const getAllItineraries = async (req, res) => {
    const itineraries = await ItineraryService.getAllItineraries(req.user.id)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(409).send({ message:"Error getting data", err })
        });
    res.status(200).send(itineraries);
}

// const createItinerary = async (req, res) => {
//     await ItineraryService.
// }

module.exports = {
    getAllItineraries
}