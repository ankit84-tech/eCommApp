var mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [{
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
      }
    }]
  })

  module.exports = mongoose.model("Users", usersSchema)