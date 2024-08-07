const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
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
    img2: {
      type: String
    },
    quantity: {
      type: Number,
      required:true
    },
        user: {
            type:String,
            required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
