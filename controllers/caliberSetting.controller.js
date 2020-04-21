var db = require('../../bin/db')


const getCaliber = async (req,res,next)=>{
    const dbQuery = `SELECT * FROM caliber;`; 
    const caliberDBResponse = await db.any(dbQuery); 
    res.json(caliberDBResponse)
};

const getOneCaliber = async (req,res,next)=>{
    console.log(req.params.id)
    const dbQuery = `SELECT * FROM caliber WHERE id=$1;`; 
    const caliberDBResponse = await db.any(dbQuery,[req.params.id]); 
    if(caliberDBResponse.length === 0){
        res.json('nothing in the database.')
    }
    res.json(caliberDBResponse)
};

const deleteCaliber = async (req, res, next)=>{
    const dbQuery = `DELETE FROM caliber WHERE id=$1;`; 
    const caliberDBResponse = await db.query(dbQuery, [parseInt(req.params.id)]);
    res.json('ok')
};

const addCaliber = async (req, res, next)=>{
    const dbQuery = `INSERT INTO caliber (caliber, description) VALUES ($1,$2)`
    const {caliber, cal_description} = req.body
    const caliberDBResponse = await db.query(dbQuery, [caliber, cal_description])
    res.json('caliber added.')
};

const updateCaliber = async (req, res, next)=>{
    const dbQuery = `UPDATE caliber SET caliber=$1, description=$2 WHERE id=$3`
    const {caliber, description, id} = req.body; 
    const caliberDBResponse = await db.query(dbQuery, [caliber,description,id])
    res.json('Caliber has been updated.')
};

module.exports = {
    getCaliber, 
    getOneCaliber, 
    deleteCaliber, 
    addCaliber,
    updateCaliber
}