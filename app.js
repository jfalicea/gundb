var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')

var securityRouter = require('./routes/security.routes');
var caliberRouter = require('./modules/caliber/caliber.routes');
var manufactureRouter = require('./modules/manufacturer/manufacture.routes');
var gunTypeRouter = require('./modules/gunType/gunType.routes');
var ownershipStatusRouter = require('./modules/ownershipStatus/ownershipStatus.routes'); 

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

//cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  }
);

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', securityRouter)
// app.use('/users', usersRouter);
app.use('/caliber', caliberRouter);
app.use('/guntype', gunTypeRouter);
app.use('/manufacturer', manufactureRouter);
app.use('/ownershipstatus', ownershipStatusRouter);


module.exports = app;
