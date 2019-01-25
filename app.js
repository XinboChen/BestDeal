var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config/database')
// [SH] Require Passport
var passport = require('passport');

// [SH] Bring in the data model
//require("./app/models/db");
// [SH] Bring in the Passport config after model is defined
require('passport');


var app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {promiseLibrary: require('bluebird')})
    .then(() => console.log('Mongo connection successful'))
    .catch((err) => onsole.error(err));

// UI entry
app.use(express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// routers
var routesApi = require('./routes/api');
// direct to home page 
app.use('/*', routesApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});



module.exports = app;