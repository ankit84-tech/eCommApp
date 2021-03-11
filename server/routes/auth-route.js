var express = require("express");
var router = express.Router()
var fs = require("fs");

var Admin = require("../Database/Admin-Schema")
var User = require("../Database/Users-Schema")


/// routes--->
router.post("/reg-admin", (req, res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }

  var newAdmin = new Admin({
    username: username,
    password: password
  })

  newAdmin.save((err, result)=> {
    if (err) {
      console.log(err.toString())
      res.send(err.toString())

    }

    console.log(result)
    res.send(result)
  })




})

router.post("/log-admin", (req, res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }

  Admin.findOne({
    username: username, password: password

  }, (err, data)=> {
    if (err) {
      res.send("err ")
    }
    if (!data) {
      res.send("user not found")
    } else {
      res.send(data)
    }
  })


})

///user -->
router.post("/reg-user", (req, res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }
  var newUser = new User({
    username: username,
    password: password
  })

  newUser.save((err, result)=> {
    if (err) {
      console.log(err.toString())
      res.send(err.toString())

    }

    console.log(result)
    res.send(result)
  })


})


router.post("/log-user",
  (req,
    res)=> {
    var {
      username,
      password
    } = req.body

    if (!username || !password) {
      res.send("all required")
    }

    User.findOne({
      username: username, password: password

    }, (err, data)=> {
      if (err) {
        res.send("err ")
      }
      if (!data) {
        res.send("user not found")
      } else {
        res.send(data)
      }
    })

  })






module.exports = router