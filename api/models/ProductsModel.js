const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean
    },
    oldPrice: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,     
    },
    img: {
      type: String,
      required: true,
    },
    img2: { type: String },
    category:{
      type: String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poducts", ProductsSchema);