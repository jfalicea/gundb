const caliberQuery = {
    getAllCalibers : `SELECT * FROM caliber;`,
    getCaliberByID : `SELECT * FROM caliber WHERE id=$1;`,
    insertCaliber: `INSERT INTO caliber (caliber, description) VALUES ($1,$2) returning id`, 
    updateCaliber: `UPDATE caliber SET caliber=$1, description=$2 WHERE id=$3`, 
    deleteCaliber: `DELETE FROM caliber WHERE id=$1`
};

const manufacturerQuery = {
    getAllManufactures : `SELECT * FROM manufacture;`, 
    getManufactureByID : `SELECT * FROM manufacture WHERE id=$1;`, 
    insertManufacture : `INSERT INTO manufacture (manufacture_name, description) VALUES ($1,$2) returning id`, 
    updateManufacture : `UPDATE manufacture SET manufacture_name=$1, description=$2 WHERE id=$3`, 
    deleteManufacture : `DELETE FROM manufacture WHERE id=$1;`
};

const statusQuery = {
    getAllStatues : `SELECT * FROM ownership_status;`, 
    getStatusByID : `SELECT * FROM ownership_status WHERE id=$1;`, 
    insertStatus : `INSERT INTO ownership_status (status, description) VALUES ($1,$2)`, 
    updateStatus : `UPDATE ownership_status SET status=$1, description=$2 WHERE id=$3`, 
    deleteStatus : `DELETE FROM ownership_status WHERE id=$1;`
};


const gunTypeQuery = {
    getAllGunTypes : `SELECT * FROM gun_type;`, 
    getGunTypeByID : `SELECT * FROM gun_type WHERE id=$1;`, 
    insertGunType : `INSERT INTO gun_type (type, description) VALUES ($1,$2) returning id`,
    updateGunType : `UPDATE gun_type SET type=$1, description=$2 WHERE id=$3`, 
    deleteGunType : `DELETE FROM gun_type WHERE id=$1;`
};


const ownershipStatusQuery = {
    getAllownershipStatus : `SELECT * FROM ownership_status`, 
    getOwnershipStatusByID : `SELECT * FROM ownership_status WHERE id=$1`,
    insertOwnershipStatus : `INSERT INTO ownership_status (status, description) VALUES ($1,$2) returning id`, 
    updateOwnershipStatus : `UPDATE ownership_status SET status=$1, description=$2 WHERE id=$3`, 
    deleteOwnershipStatus : `DELETE FROM ownership_status WHERE id=$1;` 
}; 

module.exports = {
    caliberQuery,
    manufacturerQuery, 
    statusQuery, 
    gunTypeQuery,
    ownershipStatusQuery
};