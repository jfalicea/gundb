var db = require('../../bin/db'); 
var { gunCatalogQuery } = require('../../shared/queryService')

const gunCatalogService ={

    getAllGuns :  function () {
        const dbQuery = gunCatalogQuery.getAllguns; 
        const gunDBResp =  db.query(dbQuery); 
        return gunDBResp
    }, 

    getGunByID : function (){
        const dbQuery = gunCatalogQuery.getGunByID; 
        const gunDBResp =  db.query(dbQuery); 
        if(gunDBResp.length === 0){
            return "Nothing in database."; 
        }; 
        return gunDBResp;
    }, 

    addGun : function (serialNumber, manufactureID, model, userID, ownershipStatusID, caliberID, gunTypeID, isnfa, notes){
        const dbQuery = gunCatalogQuery.insertGun; 
        const gunDBResp = db.query(dbQuery, []); 

    }

};


module.exports = gunCatalogService;