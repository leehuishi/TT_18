// import controllers
const destinationController = require('../controllers/DestinationController');

const router = require("express").Router();

router.post('/create', destinationController.createDestination);
router.delete('/delete/:id', destinationController.deleteDestination);
router.put('/edit/:id', destinationController.editDestination);


module.exports = router;