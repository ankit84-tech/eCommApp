var express = require("express");
var router = express.Router()
var homeCont = require("../controller/home")
var adminCont = require("../controller/admin");


var jwt = require("jsonwebtoken");

const userMiddle = async (req, res, next)=> {
  const token = req.cookies.token || ""
  try {
    if (!token) {
      res.status(404).send("please login first")
    }
    const decrypt = await jwt.verify(token, process.env.TOKENKEY)
    if (!decrypt) {
      res.status(400).send("authentication failed due to wrong token")
    } else if (decrypt.role !== process.env.USERROLE) {
      res.status(400).send("admin is not registered")
    } else {
      req.user = {
        userId: decrypt.userId
      }
      next();

    }

  }catch(e) {
    res.status(500).send(e.toString())
  }
}




///---user profile--->
router.get("/profile", userMiddle, homeCont.user_profile)


///---add to cart -->
router.post("/cart", userMiddle, homeCont.add_to_cart)


// ---get all cart of user
router.get("/cart", userMiddle, homeCont.all_cart_item)


/// delete user's cart item
router.delete("/cart/:cartItemId", userMiddle, homeCont.delete_user_cart)



/// ---place order -->
router.post("/place-order", userMiddle, homeCont.placeOrder)


//review on product
router.post("/review", userMiddle, homeCont.review_product)


// get all items route
router.get("/item", adminCont.get_all_items)


///get single item
router.get("/item/:id", adminCont.get_single_item)




module.exports = router;