/* Caliber Modification Settings */
var express = require('express');
var router = express.Router();
var caliberControls = require('../controller/caliberSetting.controller');

//get all calibers
router.get('/', caliberControls.getCaliber);

//get one caliber 
router.get('/:id', caliberControls.getOneCaliber);

//delete a caliber
router.delete('/', caliberControls.deleteCaliber);

//insert caliber
router.post('/add', caliberControls.addCaliber)

//update caliber
router.put('/', caliberControls.updateCaliber)

module.exports = router;