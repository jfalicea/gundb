var db = require('../../../bin/db')
var QueryService = require('../../../shared/Query.service')


const gunController = {
    caliber : {
        getCalibers :  function (){
            const dbQuery = QueryService.caliber.getAllCalibers; 
            const caliberDBResponse =  db.any(dbQuery);
            return caliberDBResponse;
        }, 

        getCaliberByID : function(caliberID){
            const dbQuery = QueryService.caliber.getCaliberByID;
            const caliberDBResponse =  db.any(dbQuery,[caliberID]); 
            if(caliberDBResponse.length === 0){
                return("Nothing in the database");
            }
            return caliberDBResponse;
        }, 

        addCaliber : async function(caliber, caliber_description){
            const dbQuery = QueryService.caliber.insertCaliber;
            const caliberDBResponse = await db.query(dbQuery, [caliber, caliber_description])
            if(caliberDBResponse.length === 0){
                return "Failure"
            }
            return "Caliber has been added"
        },

        updateCaliber : async function(id,caliber,description){
            const dbQuery = QueryService.caliber.updateCaliber;
            const caliberDBResponse = await db.query(dbQuery, [caliber,description,id]);
            return 'The caliber has been updated';
        },

        deleteCaliber : async function (id){
            const dbQuery = QueryService.caliber.deleteCaliber; 
            const caliberDBResponse = await db.query(dbQuery, [parseInt(id)]);
            console.log(caliberDBResponse)
            return('OK')
        }

    }


}

module.exports = gunController