var express = require('express'); 
var router = express.Router(); 
var manufacturerController = require('./manufacture.controller'); 


router.get('/', manufacturerController.getManufacture); 

router.get('/:id', manufacturerController.getManufactureByID); 

router.post('/', manufacturerController.addManufacture); 

router.delete('/:id', manufacturerController.deleteManufacture); 

router.put('/:id', manufacturerController.updateManufacture); 


module.exports = router; 