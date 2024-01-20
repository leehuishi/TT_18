const ItineraryService = require('../services/ItineraryService');
const db = require("../models");

// models
const Itinerary = db.itinerary;

const getAllItineraries = async (req, res) => {
    const itineraries = await ItineraryService.getAllItineraries(req.user.id)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(409).send({ message:"Error getting data", err })
        });
    res.status(200).send(itineraries);
}

const createItinerary = async (req, res) => {
    const curr_user = req.user;
    const itinerayInfo = {
        user_id:curr_user.id,
        country_id:req.body.country_id,
        budget:req.body.budget,
        title:req.body.title
    }
    const iti_model = await Itinerary.create(itinerayInfo)
    res.status(200).send(iti_model);

}

const deleteItinerary = async (req, res) => {
    const curr_user = req.user;
    const itinerary_id = req.body.id;


    await Itinerary.destroy({
        where:{
            id:itinerary_id,
            user_id:curr_user.id
        }
    })
    res.status(200).send('Itineary deleted');
}

const updateItinerary = async (req, res) => {
    const curr_user = req.user;
    const itinerary_id = req.body.id;
    
    const itinerayInfo = {
        country_id:req.body.country_id,
        budget:req.body.budget,
        title:req.body.title
    }

    let itinerary = await Itinerary.update(
        itinerayInfo, 
        {where : {
            id:itinerary_id,
            user_id:curr_user.id
        }})
    res.status(200).send(itinerary);

}

module.exports = {
    getAllItineraries,
    createItinerary, 
    deleteItinerary,
    updateItinerary
}