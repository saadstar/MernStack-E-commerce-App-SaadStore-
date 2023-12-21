const express = require("express");
const router = express.Router();
const {
  createPayment,
  testStripe,
} = require("../controllers/stripeController");
// create a new payment
router.post("/",createPayment );
// fetch all products
router.get("/",testStripe );

module.exports = router;
