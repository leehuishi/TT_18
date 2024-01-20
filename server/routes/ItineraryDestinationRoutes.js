// import controllers
const itineraryDestinationController = require('../controllers/ItineraryDestinationController');

const router = require("express").Router();

router.post('/addItineraryDest', itineraryDestinationController.addItineraryDestination);

module.exports = router;