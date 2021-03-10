var express = require('express');
var router = express.Router();
var fs = require("fs");
var Product = require("../Database/Products-Schema");


// get all items route


router.get("/item", (req, res)=> {
  res.send("Products")
})

router.get("/item/:id", (req, res)=> {})

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
router.put("/item/:id", (req, res)=> {})

//delete item route

router.delete("/item/:id", (req, res)=> {})


// get all orders






module.exports = router;