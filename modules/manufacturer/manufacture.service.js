var db = require('../../bin/db')
var { manufacturerQuery } = require('../../shared/queryService')


const manufacturerService = {
    
    getManufacturer : async function (){
        const dbQuery = manufacturerQuery.getAllManufacturers; 
        const manufactureDBResponse = await db.any(dbQuery); 
        return manufactureDBResponse;
    }, 

    getManufacturerByID : async function(manufactureID) {
        const dbQuery = manufacturerQuery.getManufactureByID; 
        const manufactureDBResponse = await db.any(dbQuery,[manufactureID]); 
        if(manufactureDBResponse.length === 0){
            return 'nothing in the database.'
        }
        return manufactureDBResponse
    }, 

    addManufacturer : async function (manufacture, manufacture_description){
        const dbQuery = manufacturerQuery.insertManufacture; 
        const manufactureDBResponse = await db.query(dbQuery, [manufacture, manufacture_description]);
        if(manufactureDBResponse.length === 0){
            return "failure";
        }; 
        return 'Manufacture has been added.';
    }, 

    updateManufacturer : async function (manufactureID, manufacture, description){
        const dbQuery = manufacturerQuery.updateManufacture; 
        const manufactureDBResponse = await db.query(dbQuery,[manufacture, description,manufactureID]); 
        return `The manufacture was updated. `;
    }, 

    deleteManufacturer : async function (manufactureID) {
        const dbQuery = manufacturerQuery.deleteManufacture; 
        const manufactureDBResponse = await db.query(dbQuery,[manufactureID]);
        return 'OK';
    }


}



module.exports = manufacturerService