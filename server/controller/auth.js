var Admin = require("../Database/Admin-Schema")
var User = require("../Database/Users-Schema")
var jwt = require("jsonwebtoken");


class authController {


  //register Admin

  register_admin (req, res) {
    var {
      username,
      password
    } = req.body


    var newAdmin = new Admin({
      username: username,
      password: password
    })

    newAdmin.save((err, result)=> {
      if (err) {
        res.status(500).send(err.toString())
      } else {
        res.send(result)}
    })

  }

  //login Admin
  login_admin(req,
    res) {

    var {
      username,
      password
    } = req.body


    Admin.findOne({
      username: username,
      password: password

    },
      (err, data)=> {
        if (err) {
          res.status(500).send("err ")
        } else if (!data) {
          res.status(400).send("user not found")
        } else {
          const token = jwt.sign({
            userId: data._id,
            role: process.env.ADMINROLE
          }, process.env.TOKENKEY)
          res.cookie("token", token).send("logged in successfully")
        }
      })


  }

  //logout admin

  logout_admin(req,
    res) {
    res.cookie("token",
      "").send("admin logged out successfully")
  }




  //register user

  register_user (req,
    res) {
    var {
      username,
      password
    } = req.body

    if (!username || !password) {
      res.status(400).send("all required")
    }
    var newUser = new User({
      username: username,
      password: password
    })

    newUser.save((err, result)=> {
      if (err) {
        res.status(500).send(err.toString())
      }
      res.send(result)
    })


  }

  ///log user

  login_user(req,
    res) {
    var {
      username,
      password
    } = req.body

    if (!username || !password) {
      res.status(400).send("all required")
    }
    User.findOne({
      username: username, password: password

    }, (err, data)=> {
      if (err) {
        res.status(500).send("err ")
      } else if (!data) {
        res.status(400).send("user not found")
      } else {
        const token = jwt.sign({
          userId: data._id,
          role: process.env.USERROLE
        }, process.env.TOKENKEY)
        res.cookie("token", token).send("logged in successfully")
      }
    })

  }
  ///logout user

  logout_user(req,
    res) {
    res.cookie("token",
      "").send("user logged out successfully")
  }


}


module.exports = new authController()