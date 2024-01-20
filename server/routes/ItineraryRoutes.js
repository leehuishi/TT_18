// import controllers
const itineraryController = require('../controllers/ItineraryController');
const auth = require("../middleware/auth_token");

const router = require("express").Router();

router.get('/all', auth.authenticateToken, itineraryController.getAllItineraries);
router.post('/create', auth.authenticateToken, itineraryController.createItinerary);
router.delete('/delete', auth.authenticateToken, itineraryController.deleteItinerary);
router.put('/edit', auth.authenticateToken, itineraryController.updateItinerary);

module.exports = router;