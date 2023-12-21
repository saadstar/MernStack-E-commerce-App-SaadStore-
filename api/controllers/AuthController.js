const asyncHandler = require("express-async-handler");
const User = require('../models/UserModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// register function
const register = asyncHandler(async (req, res) => {
    const { username, password, email, isAdmin } = req.body
    try {

        // Validations 
        if (!username) {
            res.status(404).json("Username is required!");
        }
        if (!email) {
            res.status(404).json("email is required!");
        }
        if (!password) {
            res.status(404).json("password is required!");
        }

        // Hashing Password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        // creating a new user 
        const newUser = new User({
            username, password: hashedPassword, email, isAdmin
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        
        res.status(500).json("register Failed!")
    }
});

// Login function 
const login = asyncHandler(async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        // checking user existing
        if (!user) {
            res.status(500).json("User Not Found!");            
        }
        // comparing passwords
        const isCorrect = bcrypt.compareSync(req.body.password,user.password);
        if (!isCorrect) {
            res.status(500).json("Wrong Password!");            
        }
        // jwt
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRETE_KEY,
          {expiresIn:"7d"}
        );
        // hidding password
        const { password, ...others } = user._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(others);
    } catch (err) {
        res.status(500).json("Login Failed!");
}
});

// show all users in dashboard
const users = asyncHandler(async (req, res) => { 
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }catch(err){
        res.status(401).json("Error in Fetching all Users!");
    }
})


module.exports = { register, login ,users};