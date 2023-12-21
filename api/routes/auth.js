const express = require("express");
const router = express.Router();
const { register, login, users } = require("../controllers/AuthController");

// @POST Sign Up
router.post("/register", register);

// @POST Sign In
router.post("/login", login);

//@GET show all users 
router.get("/", users);


module.exports = router;