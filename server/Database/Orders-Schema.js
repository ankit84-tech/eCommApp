var mongoose = require("mongoose");


var orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Orders", orderSchema);