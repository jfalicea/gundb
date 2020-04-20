var express = require('express');
var router = express.Router();
var ownStatusController = require('../controller/statusSettings.controller')

//get all
router.get('/', ownStatusController.getStatus)
//get one
router.get('/:id', ownStatusController.getOneStatus)
//add one
router.post('/', ownStatusController.addStatus)
//delete one
router.delete('/', ownStatusController.deleteStatus)
//update
router.put('/', ownStatusController.updateStatus)





module.exports = router;