// import controllers
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth_token.js');

const router = require("express").Router();

router.get('/')
router.get('/all', userController.getAllUsers);
router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/logout', auth.authenticateToken, userController.logoutUser);
module.exports = router;