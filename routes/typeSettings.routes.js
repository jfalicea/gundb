var express = require('express');
var router = express.Router();
var typeControls = require('../controller/typeSettings.controller');

//get all Gun Type

router.get('/', typeControls.getGunType);

//get one Gun Type

router.get('/:id', typeControls.getOneGunType);

//delete a Gun Type
router.delete('/:id', typeControls.deleteGunType);

//insert Gun Type
router.post('/add', typeControls.addGunType)

//update Gun Type
router.put('/', typeControls.updateGunType)

module.exports = router;