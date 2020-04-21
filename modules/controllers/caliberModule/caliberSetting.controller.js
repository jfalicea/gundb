var Caliber = require('./caliber.service')

const getCaliber = async (req,res,next)=>{
    let caliberDBResp = await Caliber.getCalibers()
    res.status(200).json(caliberDBResp)
};

const getCaliberByID = async (req,res,next)=>{
    const caliberID = parseInt(req.params.id)
    const caliberDBResp = await Caliber.getCaliberByID(caliberID) 
    res.status(200).json(caliberDBResp)
};

const addCaliber = async (req, res, next)=>{
    const {caliber, caliber_description} = req.body
    const caliberDBResp = await Caliber.addCaliber(caliber,caliber_description); 
    res.status(200).json(caliberDBResp);
};

const updateCaliber = async (req, res, next)=>{
    const id = req.params.id
    const {caliber, description} = req.body; 
    const caliberDBResp = await Caliber.updateCaliber(id,caliber,description)
    res.status(200).json(caliberDBResp);
};

const deleteCaliber = async (req, res, next)=>{
    const id = parseInt(req.params.id)
    const caliberDBResp = await Caliber.deleteCaliber(id)
    res.json(caliberDBResp)
};



module.exports = {
    getCaliber, 
    getCaliberByID, 
    deleteCaliber, 
    addCaliber,
    updateCaliber
}