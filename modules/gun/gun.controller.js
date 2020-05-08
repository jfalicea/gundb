const gunCatalogService = require('./gun.service'); 

const getAllGuns = async function(req, res, next){
    const gunCatalog = await gunCatalogService.getAllGuns(); 
    res.status(200).json(gunCatalog); 
}; 



module.exports = {
    getAllGuns
}