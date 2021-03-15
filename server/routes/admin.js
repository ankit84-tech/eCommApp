var express = require('express');
var router = express.Router();
var adminCont = require("../controller/admin");
var jwt = require("jsonwebtoken");

const adminMiddle = async (req, res, next) => {
  const token = req.cookies.token || ""
  try {
    if (!token) {
      res.status(404).send("please login first")
    }
    const decrypt = await jwt.verify(token, process.env.TOKENKEY)
    if (!decrypt) {
      res.status(400).send("authentication failed due to wrong token")
    } else if (decrypt.role !== process.env.ADMINROLE) {
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



//get all orders
router.get("/all-orders", adminCont.get_all_orders)


// get Orders on single item.
router.get("/all-orders/:productid", adminMiddle, adminCont.single_item_order)


// get all items route
router.get("/item", adminMiddle, adminCont.get_all_items)


///get single item
router.get("/item/:id", adminMiddle, adminCont.get_single_item)


// add items
router.post("/item", adminMiddle, adminCont.add_item)



//updated item route
router.put("/item/:id", adminMiddle, adminCont.update_item)


//delete item route
router.delete("/item/:id", adminMiddle, adminCont.delete_item)

//delete all items
router.delete("/item", adminMiddle, adminCont.delete_all)


//get total count of users
router.get("/count-users", adminMiddle, adminCont.count_users)


//get total count of products
router.get("/count-products", adminCont.count_products)


module.exports = router;