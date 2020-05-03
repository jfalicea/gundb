var ownershipStatusService = require('./ownershipStatus.service'); 

const getAllOwnershipStatus =  async function (req, res, next){
    const ownershipStatusResp = await ownershipStatusService.getAllOwnershipStatus(); 
    res.status(200).json(ownershipStatusResp); 
};

const getOwnershipStatusByID = async function (req, res, next){
    const ownershipStatusID = parseInt(req.params.id); 
    const ownershipStatusResp = await ownershipStatusService.getOwnershipStatusByID(ownershipStatusID); 
    res.status(200).json(ownershipStatusResp); 
};

const addOwnershipStatus  = async function (req, res, next){
    const { ownershipStatus, description } = req.body; 
    const ownershipStatusResp = await ownershipStatusService.addOwnershipStatus(ownershipStatus, description); 
    res.status(200).json(ownershipStatusResp); 
};

const updateOwnershipStatus = async function (req, res, next){

};

const deleteOwnershipStatus = async function (req, res, next){

};


module.exports = { 
    getAllOwnershipStatus, 
    getOwnershipStatusByID, 
    addOwnershipStatus, 
    updateOwnershipStatus, 
    deleteOwnershipStatus
};