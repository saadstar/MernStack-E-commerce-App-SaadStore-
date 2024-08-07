const express = require("express");
const router = express.Router();
const {
  createOrder,
  orders,
  userOrder,
} = require("../controllers/orderController");

// create a new order
router.post("/", createOrder);
// fetch all orders
router.get("/", orders);
// fetch  orders by userid
router.get("/:id", userOrder);

module.exports = router;
