var User = require("../Database/Users-Schema");
var Orders = require("../Database/Orders-Schema");
var homeCont = require("../controller/home")
var Product = require("../Database/Products-Schema")


class homeController {

  ///user profile --user id will come from middlewere use that to find user
  user_profile(req, res) {
    User.find({
      username: "cLancer"
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
      username,
      productID,
      quantity
    } = req.body;

    if (! username || !productID, !quantity) {
      res.status(400).send("wtf are u doing")
    }

    var newOrder = new Orders({
      username: username,
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
      username,
      productID,
      quantity
    } = req.body

    if (!username||!productID||!quantity) {
      res.status(400).send("wtf are u doing")}

    User.updateOne({
      username: username
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



  /// delete user's cart item

  delete_user_cart(req,
    res) {
    var item = cartItems.find({
      userId: req.params.userId,
      _id: req.params.cartItemI
    })

    if (!item) {
      res.status(400).send("cart item not found..")
    } else {
      item.remove((err, data)=> {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send("cart item deleted..")
        }

      })
    }
  }

  //review on products
  review_product(req,
    res) {
    var {
      userId,
      productId,
      review
    } = req.body

    if (!userId||!review ||!productId) {
      res.status(400).send("wtf are u doing")
    }

    Product.updateOne({
      _id: productId
    }, {
      $push: {
        reviews: {
          reviewerId: userId,
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