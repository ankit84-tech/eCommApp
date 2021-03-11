var express = require("express");
var router = express.Router()
var Users = require("../Database/Users-Schema");
var Orders = require("../Database/Orders-Schema");


///---add to cart -->
router.post("/add-to-cart", (req, res)=> {
  var {
    username,
    productID,
    quantity
  } = req.body

  if (!username||!productID||!quantity) {
    res.send("wtf are u doing")}

  Users.findOneAndUpdate({
    username: username
  }, {
    cart: {
      productId: productID,
      quantity: quantity
    }}, (err, data)=> {
    if (err) {
      res.send(err)
    } else {
      res.send("added to cart")
    }
  })

})


/// ---place order -->
router.post("/place-order", (req, res)=> {
  var {
    username, productID, quantity
  } = req.body;

  if (! username || !productID, !quantity) {
    res.send("wtf are u doing")
  }

  var newOrder = new Orders({
    username: username,
    productID: productID,
    quantity: quantity
  })

  newOrder.save((err, data)=> {
    if (err) {
      res.send("err")
    } else {
      res.send(data)
    }
  })





})

module.exports = router;