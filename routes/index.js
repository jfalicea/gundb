var express = require('express');
var router = express.Router();
const db = require('../bin/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('ok');
});





module.exports = router;
