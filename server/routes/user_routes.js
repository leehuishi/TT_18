// import controllers
const userController = require('../controllers/user_controllers');

const router = require("express").Router();

router.get('/')
router.get('/all', userController.getAllUsers);


module.exports = router;