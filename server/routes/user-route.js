var express = require("express");
var router = express.Router()
var User = require("../Database/Users-Schema");
var UserCart = require("../Database/cartItems");
var Orders = require("../Database/Orders-Schema");
var homeCont = require("../controller/home")


///---add to cart -->
router.post("/cart", homeCont.add_to_cart)

//get user's cart items

router.get("/cart/:userid", homeCont.user_cart)

/// delete user's cart item

router.delete("/cart/:userId/:cartItemId", homeCont.delete_user_cart)



/// ---place order -->
router.post("/place-order", homeCont.placeOrder)

module.exports = router;