var db = require('../../bin/db')


const getManufacture = async (req,res,next)=>{
    const dbQuery = `SELECT * FROM manufacture;`; 
    const manufactureDBResponse = await db.any(dbQuery); 
    res.json(manufactureDBResponse)
};

const getOneManufacture = async (req,res,next)=>{
    console.log(req.params.id)
    const dbQuery = `SELECT * FROM manufacture WHERE id=$1;`; 
    const manufactureDBResponse = await db.any(dbQuery,[req.params.id]); 
    if(manufactureDBResponse.length === 0){
        res.json('nothing in the database.')
    }
    res.json(manufactureDBResponse)
};

const deleteManufacture = async (req, res, next)=>{
    const dbQuery = `DELETE FROM manufacture WHERE id=$1;`; 
    const {id} = req.body 
    const manufactureDBResponse = await db.query(dbQuery, [parseInt(req.params.id)]);
    res.json('ok')
};

const addManufacture = async (req, res, next)=>{
    const dbQuery = `INSERT INTO manufacture (manufacture, description) VALUES ($1,$2)`
    const {manufacture, manufactureDescription} = req.body
    const manufactureDBResponse = await db.query(dbQuery, [manufacture, manufactureDescription])
    res.json('Manufacture added.')
};

const updateManufacture = async (req, res, next)=>{
    const dbQuery = `UPDATE manufacture SET manufacture=$1, description=$2 WHERE id=$3`
    const {manufacture, manufactureDescription, id} = req.body; 
    const manufactureDBResponse = await db.query(dbQuery, [manufacture, manufactureDescription,id])
    res.json('Manufacture has been updated.')
};

module.exports = {
    getManufacture,
    getOneManufacture,
    addManufacture,
    updateManufacture,
    deleteManufacture
}