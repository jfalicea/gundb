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

const gunCatalogQuery = {
    getAllguns : `SELECT gun.id, manufacture.manufacture_name, caliber.caliber, ownership_status.status, gun_type.type, gun.documenation, gun.image, gun.isNFA, gun.notes, user FROM gun 
                    INNER JOIN manufacture ON manufacture_id = manufacture.id
                    INNER JOIN users ON users.id = user_id
                    INNER JOIN caliber ON caliber.id = caliber_id
                    INNER JOIN ownership_status ON  ownership_status.id = ownership_status_id
                    INNER JOIN gun_type ON gun_type.id = gun_type_id
                    ORDER BY ownership_status.status ASC;`,
    getGunByID : `SELECT gun.id, manufacture.manufacture_name, caliber.caliber, ownership_status.status, gun_type.type, gun.documenation, gun.image,isNFA, gun.notes user FROM gun 
                    INNER JOIN manufacture ON manufacture_id = manufacture.id
                    INNER JOIN users ON users.id = user_id
                    INNER JOIN caliber ON caliber.id = caliber_id
                    INNER JOIN ownership_status ON  ownership_status.id = ownership_status_id
                    INNER JOIN gun_type ON gun_type.id = gun_type_id
                    WHERE gun.id = $1
                    ORDER BY ownership_status.status ASC;`, 
    insertGun : `INSERT INTO gun (serial_number, manufacture_id, model, user_id, ownership_status_id, caliber_id, gun_type_id, isnfa, notes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, serial_number, manufacture_id, model, owner_id, ownership_status_id, caliber_id, image, documenation, gun_type_id, isnfa;`,
    updateGun : `UPDATE gun SET serial_number=$1, manufacture_id=$2, model=$3, user_id=$4, ownership_status_id=$5, caliber_id=6, gun_type_id=$7, isnfa=$8, notes=$9`,
    deleteGun : `DELETE FROM gun WHERE id=$1;`
};



module.exports = {
    caliberQuery,
    manufacturerQuery, 
    statusQuery, 
    gunTypeQuery,
    ownershipStatusQuery, 
    gunCatalogQuery
};