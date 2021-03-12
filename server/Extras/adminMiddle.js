//test token
var jwt = require("jsonwebtoken");

function testAuthMiddle async (req, res, next) {
  const token = req.cookies.token || ""
  try {
    if (!token) {
      res.status(404).send("please login first")
    }
    const decrypt = await jwt.verify(token, process.env.TOKENKEY)
    if (!decrypt) {
      res.status(400).send("authentication failed due to wrong token")
    } else if (decrypt.role !== process.env.ADMINROLE) {
      res.status(400).send("admin is not registered")
    } else {
      req.user = {
        userId: decrypt.userId
      }
      next();

    }



  }catch(e) {
    res.status(500).send(e.toString())
  }
}

//module.exports = testAuthMiddle()