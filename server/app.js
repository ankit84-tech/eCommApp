//var createError = require('http-errors');
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
app.use("/home", require("./routes/user-route"))

/// ---db connection-->

//var dbUrl = "mongodb+srv://cLancer:codelancer@cluster0.hfe0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var dbUrl = "mongodb://localhost:27017/"


mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err)=> {
  if (err) {
    console.log(err.toString())
  } else {
    console.log("---> connected to database <---")
  }

})



module.exports = app;