const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).json("You are not authenticated!")
  }
  jwt.verify(token, process.env.SECRETE_KEY, (err, user) => {
    if (err) {
      res.status(401).json("Token is not Valid!");
    }
    req.user = user;
    next();
  });
});

module.exports = verifyToken;