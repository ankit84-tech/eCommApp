var User = require("../Database/Users-Schema");
var UserCart = require("../Database/cartItems");
var Orders = require("../Database/Orders-Schema");
var homeCont = require("../controller/home")



class homeController {


  /// ---place order -->
  placeOrder(req, res) {
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

    var add_cart = new UserCart({
      user: username,
      productID: productID,
      quantity: quantity

    })

    add_cart.save((err)=> {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send("added to cart")
      }
    })

  }

  //get user's cart items
  user_cart(req,
    res) {
    UserCart.find({
      userId: req.params.id
    },
      (err, data)=> {
        if (err) {
          res.status(500).send(err)
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



}


module.exports = new homeController()