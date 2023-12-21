const asyncHandler = require("express-async-handler");
const Products = require("../models/ProductsModel");

// POST
const createProduct = asyncHandler(async(req, res) => {
    try{
        const newProduct = new Products({...req.body });
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(400).json("Error in Creating a new product");
    }
});

// GET 
const products = asyncHandler(async(req, res) => {
    try{
        const findProducts = await Products.find();
        res.status(200).json(findProducts);
    }catch(err){
        res.status(400).json("Error in fetching all products");
    }
});
// GET id
const singleProduct = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
    const findProductbyId = await Products.findById(productId);
    res.status(200).json(findProductbyId);
  } catch (err) {
    res.status(400).json("Error in fetching all products");
  }
});
// DELETE id
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
     await Products.findByIdAndDelete(productId);
    res.status(200).json("Product Have Deleted Successfuly.");
  } catch (err) {
    res.status(400).json("Error in deleting a product!");
  }
});
// PUT id
const editProduct = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
    const editedProduct = await Products.findByIdAndUpdate(productId,{$set:req.body},{new:true});
    res.status(200).json(editedProduct);
  } catch (err) {
    res.status(400).json("Error in fetching all products");
  }
});


module.exports = {
  createProduct,
  products,
  singleProduct,
  deleteProduct,
  editProduct,
};