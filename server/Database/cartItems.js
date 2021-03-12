var mongoose = require("mongoose");


var cartItem = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1
    }
  })

  module.exports = mongoose.model("UserCart", cartItem)