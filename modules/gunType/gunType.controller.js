var gunTypeService = require('./gunType.service');

const getAllGunTypes = async (req, res, next)=>{
    const gunTypeResp = await gunTypeService.getAllGunType(); 
    res.status(200).json(gunTypeResp)
};

const getGunTypeByID = async (req, res, next) => {
    const gunTypeID = parseInt(req.params.id); 
    const gunTypeDBResp = await gunTypeService.getGunTypeByID( gunTypeID ); 
    res.status(200).json(gunTypeDBResp); 
};

const addGunType = async (req, res, next)=>{
    const { gunType, description } = req.body; 
    const gunTypeDBResp = await gunTypeService.addGunType( gunType, description); 
    res.status(200).json(gunTypeDBResp);
}; 

const updateGunType = async (req, res, next) => {
    const { gunType, description } = req.body;
    const gunTypeID = parseInt(req.params.id); 
    const gunTypeDBResp = await gunTypeService.updateGunType( gunTypeID, gunType, description ); 
    res.status(200).json(gunTypeDBResp); 
};

const deleteGunType = async (req, res, next) => {
    const { gunTypeID } = parseInt(req.params.id); 
    const gunTypeDBResp = await gunTypeService.deleteGunType( gunTypeID ); 
    res.status(200).json('Deleted.')
};



module.exports = {
    getAllGunTypes,
    getGunTypeByID, 
    addGunType, 
    updateGunType, 
    deleteGunType
}