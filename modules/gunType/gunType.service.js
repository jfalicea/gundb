var db = require('../../bin/db'); 
var { gunTypeQuery } = require('../../shared/queryService'); 

const gunTypeService = {

    getAllGunType : async function ( ){
        const dbQuery = gunTypeQuery.getAllGunTypes; 
        const gunTypeDBResp = await db.query(dbQuery); 
        return gunTypeDBResp; 
    }, 

    getGunTypeByID : async function ( gunTypeID ){
        const dbQuery = gunTypeQuery.getGunTypeByID; 
        const gunTypeDBResp = await db.query(dbQuery, [pareInt(gunTypeID)]);
        if(gunTypeDBResp.length === 0){
            return 'Nothing in database.'; 
        }; 
        return gunTypeDBResp;
    }, 

    addGunType : async function ( gunType, gunTypeDescription ){
        const dbQuery = gunTypeQuery.insertGunType; 
        const gunTypeDBResp = await db.query(dbQuery, [gunType, gunTypeDescription]); 
        if(gunTypeDBResp.length === 0){
            return "failure";
        }; 
        return 'Manufacture has been added.'
    }, 

    updateGunType : async function (gunTypeID, gunType, description){
        const dbQuery = gunTypeQuery.updateGunType; 
        const gunTypeDBResp = await db.query(dbQuery, [gunType, description, parseInt(gunTypeID)]);
        return 'the gun type was updated.'; 
    }, 

    deleteGunType : async function ( gunTypeID ){
        const dbQuery = gunTypeQuery.deleteGunType; 
        const gunTypeDBResp = await db.query(dbQuery, [parseInt(gunTypeID)])
        return 'Ok'; 
    }

}; 


module.exports = gunTypeService;