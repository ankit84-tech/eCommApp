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
  cart: {
    type: Array
  }
})

module.exports = mongoose.model("Users", usersSchema)