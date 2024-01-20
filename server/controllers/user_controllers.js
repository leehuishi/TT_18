const db = require("../models");

const dotenv = require('dotenv');
dotenv.config();

// models
const User = db.users;

// get all users
const getAllUsers = async (req, res) => {
    let users = await User.findAll({});
    res.status(200).send(users);
}


module.exports = {
    getAllUsers
}