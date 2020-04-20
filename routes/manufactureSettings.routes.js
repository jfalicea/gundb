var express = require('express');
var router = express.Router(); 
var manufactureController = require('../controller/manufactureSetting.controller')

router.get('/',manufactureController.getManufacture)
router.get('/:id ',manufactureController.getOneManufacture)
router.post('/',manufactureController.addManufacture)
router.delete('/',manufactureController.deleteManufacture)
router.put('/',manufactureController.updateManufacture)

module.exports = router