var express = require('express'); 
var router = express.Router(); 
var gunTypeController = require('./gunType.controller'); 

router.get('/', gunTypeController.getAllGunTypes);

router.get('/:id', gunTypeController.getGunTypeByID);

router.post('/', gunTypeController.addGunType);

router.delete('/:id', gunTypeController.deleteGunType);

router.put('/:id', gunTypeController.updateGunType); 


module.exports = router; 