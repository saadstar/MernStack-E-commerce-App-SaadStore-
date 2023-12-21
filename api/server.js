const express = require("express");
const app = express();
const env = require("dotenv").config();
const connectDB = require("./config/dbConnect");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const PORT =  process.env.PORT || 3500;
connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/payment", stripeRoute);


app.listen(PORT,() => {
    console.log(`Server Running in port: ${PORT}`)
})