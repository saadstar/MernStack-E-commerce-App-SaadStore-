const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

// POST
const createOrder = asyncHandler(async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(400).json("Error in Creating a new order");
  }
});

// GET
const orders = asyncHandler(async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(400).json("Error in fetching all orders");
  }
});
// GET id
const userOrder = asyncHandler(async (req, res) => {
    try {    
        const orders = await Order.find();
        const filteredOrders = orders.filter(order => order.user === req.params.id); 
        res.status(200).json(filteredOrders);
  } catch (err) {
    res.status(400).json("Error in fetching user orders");
  }
});

module.exports = {
  createOrder,
  orders,
  userOrder,
};