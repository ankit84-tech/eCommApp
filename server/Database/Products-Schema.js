var mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  modelName: {
    type: String, required: true
  },
  brandName: {
    type: String, required: true
  },
  prise: {
    type: Number, required: true
  }
})


module.exports = mongoose.model("Products", productSchema)