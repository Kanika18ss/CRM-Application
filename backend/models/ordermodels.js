const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    totalSpent: {
      type: Number,
      required: true,
    },
    noOfVisits:{
      type:Number,
      required:true,
      default:0,
    },
    datetimeVisited: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
