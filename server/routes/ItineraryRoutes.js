// import controllers
const itineraryController = require('../controllers/ItineraryController');

const router = require("express").Router();

router.get('/')
router.get('/all', itineraryController.getAllItineraries);

module.exports = router;