// import controllers
const userController = require('../controllers/UserController');

const router = require("express").Router();

router.get('/all', userController.getAllUsers);


module.exports = router;