require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var mongoose = require("mongoose");
var bodyparser = require("body-parser");

var app = express();

///--- all usable --->

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json())


///---all routes -->
app.use("/admin", require("./routes/admin"))
app.use("/auth", require("./routes/auth-route"))
app.use("/user", require("./routes/user-route"))
app.use("/show-admin", require("./routes/showAdmin"))

/// settings up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


/// ---db connection-->

mongoose.connect(process.env.DORYDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err)=> {
  if (err) {
    console.log(err.toString())
  } else {
    console.log("\n---> connected to database <---\n")
  }

})



module.exports = app;