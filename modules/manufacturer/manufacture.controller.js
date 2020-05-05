var manufacturer = require('./manufacture.service')


const getManufacture = async (req,res,next)=>{
    let manufacturerResp = await manufacturer.getManufacturer(); 
    res.status(200).json(manufacturerResp)
};

const getManufactureByID = async (req, res, next)=> {
    const manufacturerID  = parseInt(req.params.id);  
    const manufacturerResp = await manufacturer.getManufacturerByID( manufacturerID); 
    res.status(200).json(manufacturerResp); 
};

const addManufacture = async (req, res, next)=>{
    const { manufacturerName, manufactureDescription } = req.body; 
    const manufacturerResp = await manufacturer.addManufacturer(manufacturerName, manufactureDescription);
    res.status(200).json(manufacturerResp)
};

const updateManufacture = async (req, res, next)=>{
    const { manufacturerName, description } = req.body; 
    const  manufacturerID  = parseInt(req.params.id); 
    const manufacturerResp = await manufacturer.updateManufacturer(manufacturerID, manufacturerName, description); 
    res.status(200).json(manufacturerResp)
};

const deleteManufacture = async (req, res, next)=>{
    const {manufacturerID} = parseInt(req.params.id); 
    const manufacturerResp = await manufacturer.deleteManufacturer(manufacturerID); 
    res.status(200).json('delete'); 
};


module.exports = {
    getManufacture,
    getManufactureByID,
    addManufacture,
    updateManufacture,
    deleteManufacture
}