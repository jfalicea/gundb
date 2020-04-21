var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')

var securityRouter = require('./routes/security.routes')
var caliberRouter = require('./modules/controllers/caliberModule/caliberSettings.routes')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var ownershipStatusSettingsRouter = require('./routes/ownershipStatusSettings.routes')
// var manufactureRouter = require('./routes/manufactureSettings.routes.js')
// var typeSettingRouter = require('./routes/typeSettings.routes')

var app = express();
//cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', securityRouter)
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/caliber', caliberRouter)
// app.use('/ownershipstatus', ownershipStatusSettingsRouter)
// app.use('/manufacture', manufactureRouter)
// app.use('/type', typeSettingRouter)
module.exports = app;
