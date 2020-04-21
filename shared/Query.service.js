const QueryService = {
    caliber : {
        getAllCalibers : `SELECT * FROM caliber;`,
        getCaliberByID : `SELECT * FROM caliber WHERE id=$1;`,
        insertCaliber: `INSERT INTO caliber (caliber, description) VALUES ($1,$2) returning id`, 
        updateCaliber: `UPDATE caliber SET caliber=$1, description=$2 WHERE id=$3`, 
        deleteCaliber: `DELETE FROM caliber WHERE id=$1`
    },
    manufacturer: {
        
    }


}; 


module.exports = QueryService