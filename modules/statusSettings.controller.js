var db = require('../bin/db')


const getStatus = async (req,res,next)=>{
    const dbQuery = ``; 
    const statusDBResponse = await db.any(dbQuery); 
    res.json(statusDBResponse)
};

const getOneStatus = async (req,res,next)=>{
    console.log(req.params.id)
    const dbQuery = ""
    const statusDBResponse = await db.any(dbQuery,[req.params.id]); 
    if(statusDBResponse.length === 0){
        res.json('nothing in the database.')
    }
    res.json(statusDBResponse)
};

const deleteStatus = async (req, res, next)=>{
    const dbQuery = `DELETE FROM ownership_status WHERE id=$1;`; 
    const {id} = req.body 
    const statusDBResponse = await db.query(dbQuery, [parseInt(req.params.id)]);
    res.json('ok')
};

const addStatus = async (req, res, next)=>{
    const dbQuery = `INSERT INTO ownership_status (status, description) VALUES ($1,$2)`
    const {status, statusDescription} = req.body
    const statusDBResponse = await db.query(dbQuery, [status, statusDescription])
    res.json('Ownership Status added.')
};

const updateStatus = async (req, res, next)=>{
    const dbQuery = `UPDATE ownership_status SET status=$1, description=$2 WHERE id=$3`
    const {status, statusDescription, id} = req.body; 
    const statusDBResponse = await db.query(dbQuery, [status, statusDescription,id])
    res.json('Ownership Status has been updated.')
};

module.exports = {
    getStatus, 
    getOneStatus, 
    deleteStatus, 
    addStatus,
    updateStatus
}