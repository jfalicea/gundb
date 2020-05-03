var express = require('express'); 
var router = express.Router(); 
var ownershipStatusController = require('./ownershipStatus.controller'); 

router.get('/', ownershipStatusController.getAllOwnershipStatus);

router.get('/:id', ownershipStatusController.getOwnershipStatusByID);

router.post('/', ownershipStatusController.addOwnershipStatus);

router.put('/:id', ownershipStatusController.updateOwnershipStatus);
 
router.delete('/:id', ownershipStatusController.deleteOwnershipStatus);



module.exports = router; 