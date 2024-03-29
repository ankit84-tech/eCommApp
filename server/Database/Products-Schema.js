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
  },
  rom: {
    type: Array
  },
  ram: {
    type: Array
  },
  batteryCap: Number,
  camera: Array,
  reviews: [{
    reviewerId: {
      type: String,
      required: true
    },
    review: String
  }]
})


module.exports = mongoose.model("Products", productSchema)