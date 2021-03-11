var express = require('express');
var router = express.Router();
var fs = require("fs");
var Product = require("../Database/Products-Schema");
var Orders = require("../Database/Orders-Schema");


// get all items route


router.get("/item", (req, res)=> {

  Product.find((err, data)=> {
    if (err) {
      console.log(err)
      res.send(err)
    }
    res.send(data)
    console.log(data)

  })

})

//get all orders
router.get("/all-orders", (req, res)=> {
  Orders.find((err, data)=> {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }

  })

})


// get Orders on single item.
router.get("/all-orders/:productid/", (req, res)=> {
  Orders.find({
    productID: req.params.productid
  },
    (err, data)=> {
      if (err) {
        console.log(err)
        res.send(err)
      }

      res.send(data)
      console.log(data)

    })
})


///get single item
router.get("/item/:id", (req, res)=> {

  Product.find({
    _id: req.params.id
  },
    (err, data)=> {
      if (err) {
        console.log(err)
        res.send(err)
      }

      res.send(data)
      console.log(data)

    })
})

// add items route

router.post("/item", (req, res)=> {
  var {
    modelName,
    brandName,
    prise
  } = req.body;
  /* var modelName = req.body.modelName
  var brandName = req.body.brandName
  var prise = req.body.prise*/

  const newProduct = new Product({
    modelName: modelName,
    brandName: brandName,
    prise: prise
  })
  newProduct.save((err, result)=> {
    if (err) {
      console.log(err.toString())
      res.send(err.toString())

    }

    console.log(result)
    res.send(result)
  })


})



//updated item route
router.put("/item/:id", (req, res)=> {
  var oldData

  Product.findOne({
    _id: req.params.id
  },
    (err, data)=> {
      if (err) {
        res.send(err.toString())
      }
      if (!data) {
        res.send("item not found")
      }



      var updatable = {
        modelName: req.body.modelName || data.modelName,
        brandName: req.body.brandName || data.brandName,
        prise: req.body.prise || data.prise
      }

      Product.findOneAndUpdate({
        _id: req.params.id
      }, updatable, {
        new: true
      }, (err, data)=> {
        if (err) {
          res.send(err)
        } else {
          res.send("updated successfully")
        }


      })

    })




})

//delete item route

router.delete("/item/:id", (req, res)=> {
  /*  Product.findOneAndRemove({
    _id: req.params.id
  },
    (err, data)=> {
      if (err) {
        console.log(err)
        res.send(err)
      }
      res.send(data)
      console.log(data)

    })
    */

  var rqt = Product.findOne({
    modelName: "modelName"
  })

  rqt.remove((err)=> {
    if (err) {
      res.send(err)
    }
    res.send("deleted")
  })
})


// get all orders






module.exports = router;