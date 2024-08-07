const express = require("express");
const app = express();
const env = require("dotenv").config();
const connectDB = require("./config/dbConnect");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const stripeRoute = require("./routes/stripe");
const orderRoutes = require("./routes/orderRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const PORT = 3500 || process.env.PORT;
connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/payment", stripeRoute);
app.use("/api/orders", orderRoutes);


app.listen(PORT,() => {
    console.log(`Server Running in port: ${PORT}`)
})