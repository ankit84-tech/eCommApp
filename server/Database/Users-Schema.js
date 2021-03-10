var mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
  password: {
    type: String,
    required: true
  }
  cart: [{
    productId: String,
    quantity: Number
  }]
})

module.exports = mongoose.model("Users", usersSchema)