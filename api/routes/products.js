const express = require("express");
const router = express.Router();
const {
  createProduct,
  products,
  singleProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/ProductsController");

// create a new product 
router.post("/", createProduct);
// fetch all products 
router.get("/", products);
// fetch a product by id 
router.get("/:id", singleProduct);
// edit a product by id 
router.put("/:id",editProduct );
// delete a product by id 
router.delete("/:id", deleteProduct);

module.exports = router;