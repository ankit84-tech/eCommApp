var express = require("express");
var router = express.Router()
var authCont = require("../controller/auth");




/// register admin--->
router.post("/reg-admin", authCont.register_admin)


/// login admin
router.post("/login-admin", authCont.login_admin)


///logout admin
router.get("/logout-admin", authCont.logout_admin)


///register user -->
router.post("/reg-user", authCont.register_user)

//login user
router.post("/login-user", authCont.login_user)










module.exports = router