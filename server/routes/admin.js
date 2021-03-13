var express = require('express');
var router = express.Router();
var adminCont = require("../controller/admin");
//var middlewere = require("../Extras/adminMiddle")

//get all orders
router.get("/all-orders", adminCont.get_all_orders)


// get Orders on single item.
router.get("/all-orders/:productid", adminCont.single_item_order)


// get all items route
router.get("/item", adminCont.get_all_items)


///get single item
router.get("/item/:id", adminCont.get_single_item)


// add items
router.post("/item", adminCont.add_item)



//updated item route
router.put("/item/:id", adminCont.update_item)


//delete item route
router.delete("/item/:id", adminCont.delete_item)


//get total count of users
router.get("/count-users", adminCont.count_users)


module.exports = router;