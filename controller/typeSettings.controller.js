var db = require('../bin/db')


const getGunType = async (req,res,next)=>{
    const dbQuery = `SELECT * FROM gun_type;`; 
    const gunTypeDBResponse = await db.any(dbQuery); 
    res.json(gunTypeDBResponse)
};

const getOneGunType = async (req,res,next)=>{
    console.log(req.params.id)
    const dbQuery = `SELECT * FROM gun_type WHERE id=$1;`; 
    const gunTypeDBResponse = await db.any(dbQuery,[req.params.id]); 
    if(gunTypeDBResponse.length === 0){
        res.json('nothing in the database.')
    }
    res.json(gunTypeDBResponse)
};

const deleteGunType = async (req, res, next)=>{
    const dbQuery = `DELETE FROM gun_type WHERE id=$1;`; 
    const {id} = req.body.id
    const gunTypeDBResponse = await db.query(dbQuery, [parseInt(id)]);
    res.json('ok')
};

const addGunType = async (req, res, next)=>{
    const dbQuery = `INSERT INTO gun_type (type, description) VALUES ($1,$2)`
    const {type, gunDescription} = req.body
    const gunTypeDBResponse = await db.query(dbQuery, [type, gunDescription])
    res.json('gun type added.')
};

const updateGunType = async (req, res, next)=>{
    const dbQuery = `UPDATE gun_type SET type=$1, description=$2 WHERE id=$3`
    const {type, gunDescription, id} = req.body; 
    const gunTypeDBResponse = await db.query(dbQuery, [type, gunDescription,id])
    res.json('gun type has been updated.')
};

module.exports = {
    getGunType, 
    getOneGunType, 
    deleteGunType, 
    addGunType,
    updateGunType
}