const gunCatalogController = require('./gun.controller'); 
const express = require('express');
const router = express.Router(); 

router.get('/', gunCatalogController.getAllGuns); 


module.exports = router;