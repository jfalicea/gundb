var express = require('express');
var router = express.Router();
var typeControls = require('../controller/typeSettings.controller');

//get all calibers
router.get('/', typeControls.getGunType);

//get one caliber 
router.get('/:id', typeControls.getOneGunType);

//delete a caliber
router.delete('/', typeControls.deleteGunType);

//insert caliber
router.post('/add', typeControls.addGunType)

//update caliber
router.put('/', typeControls.updateGunType)

module.exports = router;