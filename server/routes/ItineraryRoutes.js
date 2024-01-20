// import controllers
const itineraryController = require('../controllers/ItineraryController');
const auth = require("../middleware/auth_token");

const router = require("express").Router();

router.get('/all', auth.authenticateToken, itineraryController.getAllItineraries);
router.post('/create', itineraryController.createItinerary);
router.delete('/delete', itineraryController.deleteItinerary);
router.put('/edit',  itineraryController.updateItinerary);

module.exports = router;