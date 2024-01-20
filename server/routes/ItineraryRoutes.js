// import controllers
const itineraryController = require('../controllers/ItineraryController');
const auth = require("../middleware/auth_token");

const router = require("express").Router();

router.get('/all', auth.authenticateToken, itineraryController.getAllItineraries);
// router.post('/create', auth )

module.exports = router;