var User = require("../Database/Users-Schema");
var Orders = require("../Database/Orders-Schema");
var homeCont = require("../controller/home")
var Product = require("../Database/Products-Schema")


class homeController {

  ///user profile --user id will come from middlewere use that to find user
  user_profile(req, res) {
    User.find({
      _id: req.user.userId
    }, (err, data)=> {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }

  /// ---place order -->
  placeOrder(req,
    res) {
    var {
      productID,
      quantity
    } = req.body;

    if (!productID, !quantity) {
      res.status(400).send("wtf are u doing")
    }

    var newOrder = new Orders({
      userId: req.user.userId,
      productID: productID,
      quantity: quantity
    })

    newOrder.save((err, data)=> {
      if (err) {
        res.status(500).send("err")
      } else {
        res.send(data)
      }
    })

  }

  ///---add to cart -->
  add_to_cart (req,
    res) {
    var {
      productID,
      quantity
    } = req.body

    if (!productID||!quantity) {
      res.status(400).send("wtf are u doing")}

    User.updateOne({
      _id: req.user.userId
    }, {
      $push: {
        cart: {
          productId: productID,
          quantity: quantity
        }}}, (err, data)=> {
      if (err) {
        res.send(err.toString())
      } else {
        res.send(data)
      }
    })

  }

  ///get all cart item

  all_cart_item(req,
    res) {
    User.findOne({
      _id: req.user.userId
    },
      (err, data)=> {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(data.cart)
        }
      })
  }

  /// delete user's cart item

  delete_user_cart(req,
    res) {}

  //review on products
  review_product(req,
    res) {
    var {
      productId,
      review
    } = req.body

    if (!review ||!productId) {
      res.status(400).send("wtf are u doing")
    }

    Product.updateOne({
      _id: productId
    }, {
      $push: {
        reviews: {
          reviewerId: req.user.userId,
          review: review
        }
      }
    }, (err, data)=> {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(data)
      }
    })

  }



}

module.exports = new homeController()