const mongoose = require("mongoose");

const connectDB =async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected To DataBase.");
    } catch (err) {
        console.log("Error in Connecting To DataBase!");
    }
}

module.exports=connectDB;