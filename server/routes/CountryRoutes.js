// import controllers
const countryController = require('../controllers/CountryController');

const router = require("express").Router();

router.post('/getCountry', countryController.getCountryNameById);

module.exports = router;