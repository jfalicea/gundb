var caliberService = require('./caliber.service')

const getCaliber = async (req,res,next)=>{
    let caliberDBResp = await caliberService.getCalibers()
    res.status(200).json(caliberDBResp)
};

const getCaliberByID = async (req,res,next)=>{
    const caliberID = parseInt(req.params.id)
    const caliberDBResp = await caliberService.getCaliberByID(caliberID) 
    res.status(200).json(caliberDBResp)
};

const addCaliber = async (req, res, next)=>{
    const {caliber, caliberDescription} = req.body
    const caliberDBResp = await caliberService.addCaliber(caliber,caliberDescription); 
    res.status(200).json(caliberDBResp);
};

const updateCaliber = async (req, res, next)=>{
    const id = parseInt(req.params.id)
    const {caliber, description} = req.body; 
    const caliberDBResp = await caliberService.updateCaliber(id,caliber,description)
    res.status(200).json(caliberDBResp);
};

const deleteCaliber = async (req, res, next)=>{
    const id = parseInt(req.params.id)
    const caliberDBResp = await caliberService.deleteCaliber(id)
    res.json(caliberDBResp)
};



module.exports = {
    getCaliber, 
    getCaliberByID, 
    deleteCaliber, 
    addCaliber,
    updateCaliber
}