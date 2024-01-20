const db = require("../models");

// models
const User = db.user;

// get all users
const getAllUsers = async (req, res) => {
    let users = await User.findAll({});
    res.status(200).send(users);
}


module.exports = {
    getAllUsers
}