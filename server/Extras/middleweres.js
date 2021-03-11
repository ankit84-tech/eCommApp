//test token
var jwt = require("jsonwebtoken");

export function testAuthMiddle async (req, res, next) {
  const token = req.cookies.token || ""
  try {
    if (!token) {
      res.status(404).send("please login first")
    }

    const decrypt = await jwt.verify(token, "key")

    req.user = {
      username: decrypt.username
    }

    next();

  }catch(e) {
    res.status(500).send(e.toString())
  }
}