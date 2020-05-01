/* Caliber Modification Settings */
var express = require('express');
var router = express.Router();
var caliberControls = require('./caliber.controller');

//get all calibers
router.get('/', caliberControls.getCaliber);

//get one caliber 
router.get('/:id', caliberControls.getCaliberByID);

//delete a caliber
router.delete('/:id', caliberControls.deleteCaliber);
;
//insert caliber
router.post('/', caliberControls.addCaliber)

//update caliber
router.put('/:id', caliberControls.updateCaliber)

module.exports = router;