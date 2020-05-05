var db = require('../../bin/db'); 
var { gunTypeQuery } = require('../../shared/queryService'); 

const gunTypeService = {

    getAllGunType :  function ( ){
        const dbQuery = gunTypeQuery.getAllGunTypes; 
        const gunTypeDBResp =  db.query(dbQuery); 
        return gunTypeDBResp; 
    }, 

    getGunTypeByID :  function ( gunTypeID ){
        const dbQuery = gunTypeQuery.getGunTypeByID; 
        const gunTypeDBResp =  db.query(dbQuery, [pareInt(gunTypeID)]);
        if(gunTypeDBResp.length === 0){
            return 'Nothing in database.'; 
        }; 
        return gunTypeDBResp;
    }, 

    addGunType :  function ( gunType, gunTypeDescription ){
        const dbQuery = gunTypeQuery.insertGunType; 
        const gunTypeDBResp =  db.query(dbQuery, [gunType, gunTypeDescription]); 
        if(gunTypeDBResp.length === 0){
            return "failure";
        }; 
        return 'Manufacture has been added.'
    }, 

    updateGunType :  function (gunTypeID, gunType, description){
        const dbQuery = gunTypeQuery.updateGunType; 
        const gunTypeDBResp =  db.query(dbQuery, [gunType, description, parseInt(gunTypeID)]);
        return 'the gun type was updated.'; 
    }, 

    deleteGunType :  function ( gunTypeID ){
        const dbQuery = gunTypeQuery.deleteGunType; 
        const gunTypeDBResp =  db.query(dbQuery, [parseInt(gunTypeID)])
        return 'Ok'; 
    }

}; 


module.exports = gunTypeService;