/* Caliber Modification Settings */
var express = require('express');
var router = express.Router();
var caliberControls = require('./caliberSetting.controller');

//get all calibers
router.get('/', caliberControls.getCaliber);

//get one caliber 
router.get('/:id', caliberControls.getCaliberByID);

//delete a caliber
router.delete('/:id', caliberControls.deleteCaliber);

//insert caliber
router.post('/add', caliberControls.addCaliber)

//update caliber
router.put('/', caliberControls.updateCaliber)

module.exports = router;