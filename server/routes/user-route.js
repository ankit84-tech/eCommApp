var express = require("express");
var router = express.Router()
var fs = require("fs");

/*
var Orders
fs.readFile("./Database/Orders.json", (err, data)=> {
  if (err) {
    console.log(err)
  }


  Orders = JSON.parse(data)
  console.log(Orders)

})

*/
///---add to cart -->
router.post("/add-to-cart", (req, res)=> {
  var {
    username,
    productID,
    count
  } = req.body

  if (!username||!productID||!count) {
    res.send("wtf are u doing")
  }



  res.send(Users)


})


/// ---place order -->
router.post("/place_order", (req, res)=> {

  /* var {
    user, product
  } = req.body;

    if (!user || !product) {
    res.send("wtf are u doing")
  }
  var order = {
    user: user,
    product: product
  }

  Orders.push(order)
*/
  res.send(user)


})

module.exports = router;