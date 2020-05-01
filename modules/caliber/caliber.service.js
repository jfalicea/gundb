var db = require('../../bin/db')
var { caliberQuery } = require('../../shared/queryService')


const caliberService = {
    getCalibers :  function (){
        const dbQuery = caliberQuery.getAllCalibers; 
        const caliberDBResponse =  db.any(dbQuery);
        return caliberDBResponse;
    }, 

    getCaliberByID : function(caliberID){
        const dbQuery = caliberQuery.getCaliberByID;
        const caliberDBResponse =  db.any(dbQuery,[caliberID]); 
        if(caliberDBResponse.length === 0){
            return("Nothing in the database");
        }
        return caliberDBResponse;
    }, 

    addCaliber : async function(caliberName, caliber_description){
        const dbQuery = caliberQuery.insertCaliber;
        const caliberDBResponse = await db.query(dbQuery, [caliberName, caliber_description])
        if(caliberDBResponse.length === 0){
            return "Failure"
        }
        return "Caliber has been added"
    },

    updateCaliber : async function(id,caliberName,description){
        const dbQuery = caliberQuery.updateCaliber;
        const caliberDBResponse = await db.query(dbQuery, [caliberName,description,id]);
        return 'The caliber has been updated';
    },

    deleteCaliber : async function (id){
        const dbQuery = caliberQuery.deleteCaliber; 
        const caliberDBResponse = await db.query(dbQuery, [parseInt(id)]);
        console.log(caliberDBResponse)
        return('OK')
    }
}

module.exports = caliberService