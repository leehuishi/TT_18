const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const db = require("../models");

dotenv.config();

blacklistToken = db.blacklistToken;

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]


  if (token == null) { 
    return res.sendStatus(401) 
  };

  isBlacklisted = await blacklistToken.findOne({
    where: {token: token}
  });
  console.log("BLACKLISTED TOKEN IS");
  console.log(isBlacklisted);
  
  if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(err)

    if (err) {
        return res.sendStatus(403)
    }

    console.log("AUTHENTHICATING USER FROM AUTH TOKEN");
    console.log(user);

    req.token = token;
    req.user = user;

    next()
  })
}

module.exports = {
    authenticateToken
}