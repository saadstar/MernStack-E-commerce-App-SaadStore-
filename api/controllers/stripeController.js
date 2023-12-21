const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY);

const createPayment = asyncHandler(async (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    });

})

const testStripe=asyncHandler(async(req,res)=>{
    res.json("Test Stripe Workking....");
})
module.exports = { createPayment,testStripe };
