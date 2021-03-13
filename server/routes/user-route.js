var express = require("express");
var router = express.Router()
var homeCont = require("../controller/home")
var adminCont = require("../controller/admin");

///---user profile--->
router.get("/profile", homeCont.user_profile)


///---add to cart -->
router.post("/cart", homeCont.add_to_cart)


/// delete user's cart item

router.delete("/cart/:userId/:cartItemId", homeCont.delete_user_cart)



/// ---place order -->
router.post("/place-order", homeCont.placeOrder)


//review on product

router.post("/review", homeCont.review_product)


// get all items route
router.get("/item", adminCont.get_all_items)


///get single item
router.get("/item/:id", adminCont.get_single_item)




module.exports = router;