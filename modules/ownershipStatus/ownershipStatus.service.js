var db = require('../../bin/db'); 
var { ownershipStatusQuery } = require('../../shared/queryService'); 

const ownershipStatusService = {

    getAllOwnershipStatus :  function (){
        const dbQuery = ownershipStatusQuery.getAllownershipStatus; 
        const ownershipStatusDBResp =  db.query(dbQuery); 
        return ownershipStatusDBResp; 
    }, 

    getOwnershipStatusByID :  function ( ownershipStatusID){
        const dbQuery = ownershipStatusQuery.getOwnershipStatusByID; 
        const ownershipStatusDBResp =  db.query(dbQuery); 
        if(ownershipStatusDBResp.length === 0){
            return 'Nothing in Database'
        }
        return ownershipStatusDBResp; 
    }, 

    addOwnershipStatus :  function ( ownershipStatus, description ){
        const dbQuery = ownershipStatusQuery.insertOwnershipStatus; 
        const ownershipStatusDBResp =  db.query(dbQuery, [ownershipStatus, description]);
        if(ownershipStatusDBResp.lenght === 0){
            return "failure"
        }
        return 'status was insert was successful'; 
    },

    updateOwnershipStatus :  function( ownershipStatusID, ownershipStatus, description ){
        const dbQuery = ownershipStatusQuery.updateOwnershipStatus; 
        const ownershipStatusDBResp =  db.query(dbQuery, [ownershipStatus, description, ownershipStatusID]); 
        return 'update successful'; 
    },

    deleteOwnershipStatus :  function( ownershipStatusID ){
        const dbQuery = ownershipStatusQuery.deleteOwnershipStatus; 
         db.query(dbQuery, [parseInt(ownershipStatusID)]); 
        return 'OK'
    }

}; 


module.exports = ownershipStatusService; 