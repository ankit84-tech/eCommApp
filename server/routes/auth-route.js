var express = require("express");
var router = express.Router()
var fs = require("fs");



/// routes--->
router.post("/reg-admin", (req, res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }


})

router.post("/log-admin", (req, res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }


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



})


router.post("/log-user", (req,
  res)=> {
  var {
    username,
    password
  } = req.body

  if (!username || !password) {
    res.send("all required")
  }



})






module.exports = router