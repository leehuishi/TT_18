// import controllers
const userController = require('../controllers/UserController');

const router = require("express").Router();

router.get('/')
router.get('/all', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router;