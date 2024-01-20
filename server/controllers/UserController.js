const db = require("../models");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const dotenv = require('dotenv');

// models
const User = db.user;
const blacklistTokens = db.blacklistToken;

// get all users
const getAllUsers = async (req, res) => {
    let users = await User.findAll({});
    res.status(200).send(users);
}

const createUser = async (req, res) => {
  // Validate Request 
  if (!req.body.username){
      res.status(400).send({
          message:"Username cannot be empty"
      })
  };
  const pw_salt = genSaltSync(10);
  req.body.password = hashSync(req.body.password, pw_salt);

  const user_info = {
      username: req.body.username,
      password:req.body.password,
      first_name: req.body.fname,
      last_name: req.body.lname
  };

  const user_model = await User.create(user_info);
  res.status(200).send("Created User");
}

// login User and authenthicate using jwt
// login user
const loginUser = async (req, res) => {
    
    // // Validate Request with Hash
    // if (!req.body.username || !req.body.password){
    //   res.status(400).send({
    //       message:"Username or password cannot be empty"
    //   })
    // };

    // let user_hash = await User.findOne({ 
    //     where: { 
    //         username: req.body.username
    //     }
    // });
    // const result_hash = compareSync(req.body.password, user.password);
    // 

    // Validate Request no hash

    if (!req.body.username || !req.body.password){
        console.log(req.body.username)
        console.log(req.body.password)       
        res.status(400).send({
            message:"Username or password cannot be empty"
        })
    };


    let user = await User.findOne({ 
        where: { 
            username: req.body.username
        }
    });
    const result = req.body.password === user.password;
    if (result) {
      const jsontoken = sign({ id:user.id, user: user.username }, process.env.JWT_KEY, {expiresIn: "100h"});
      return res.json({
        success: 1,
        message: "login successfully",
        user:user.username, 
        token: jsontoken
      });
    } else {
      return res.json({
        success: 0,
        data: "Invalid email or password"
      });
    }
  };

const logoutUser = async (req, res) => {
    const curr_user = req.user;

    console.log("LOGOUT USER FUNCTION");
    
    const Token = {
        token:req.token
    };

    const blacklistedToken = await blacklistTokens.create(Token);

    res.status(200).send({
        user_info: curr_user,
        message: "Succesful Logout"
    })
}

module.exports = {
    getAllUsers,
    loginUser,
    createUser,
    logoutUser
}