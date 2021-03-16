var Product = require("../Database/Products-Schema");
var Orders = require("../Database/Orders-Schema");
var Users = require("../Database/Users-Schema");


class adminController {

  //get all Orders

  get_all_orders(req, res) {
    Orders.find((err, data)=> {
      if (err) {
        res.statue(500).send(err)
      } else {
        res.send(data)
      }
    })
  }



  //orders on single item

  single_item_order(req,
    res) {
    Orders.find({
      productID: req.params.productid
    },
      (err,
        data)=> {
        if (err) {
          res.status(500).send(err)
        }

        res.send(data)

      })
  }


  //get all items
  get_all_items(req,
    res) {

    Product.find((err, data)=> {
      if (err) {
        res.status(500).send(err)
      }
      res.send(data)
    })

  }

  //get single item

  get_single_item(req,
    res) {

    Product.findOne({
      _id: req.params.id
    },
      (err, data)=> {
        if (err) {
          res.status(500).send(err)
        }
        res.send(data)
      })
  }


  //add itme
  add_item(req,
    res) {
    var {
      modelName,
      brandName,
      prise,
      rom, ram,
      batteryCap,
      camera
    } = req.body;

    const newProduct = new Product({
      modelName: modelName,
      brandName: brandName,
      prise: prise,
      rom: rom.split(" "),
      ram: ram.split(" "),
      batteryCap: batteryCap,
      camera: camera.split(" ")

    })
    newProduct.save((err, result)=> {
      if (err) {
        res.status(500).send(err.toString())
      }
      res.send(result)
    })


  }

  //update item

  update_item(req,
    res) {

    Product.findOne({
      _id: req.params.id
    },
      (err, data)=> {
        if (err) {
          res.status(500).send(err.toString())
        }
        if (!data) {
          res.status(400).send("item not found")
        }

        var updatable = {
          modelName: req.body.modelName || data.modelName,
          brandName: req.body.brandName || data.brandName,
          prise: req.body.prise || data.prise,
          ram: req.body.ram || data.ram,
          rom: req.body.rom || data.rom,
          batteryCap: req.body.batteryCap || data.batteryCap,
          camera: req.body.camera || data.camera
        }

        Product.findOneAndUpdate({
          _id: req.params.id
        }, updatable, {
          new: true
        }, (err, data)=> {
          if (err) {
            res.status(500).send(err)
          } else {
            res.send("updated successfully")
          }


        })
      })
  }

  //delete item
  delete_item(req, res) {

    var rqt = Product.findOne({
      modelName: "modelName"
    })

    rqt.remove((err)=> {
      if (err) {
        res.send(err)
      }
      res.send("deleted")
    })
  }

  //delete all items
  delete_all(req,
    res) {
    Product.remove((err, data)=> {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send("all items deleted")
      }
    })
  }

  ///count users
  count_users(req,
    res) {
    Users.count((err, data)=> {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({
          count: data
        })
      }
    })
  }

  ///count products
  count_products(req,
    res) {
    Product.count((err, data)=> {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({
          count: data
        })
      }
    })
  }


}


module.exports = new adminController()