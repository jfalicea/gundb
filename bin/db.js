require('dotenv').config()


const pgp = require("pg-promise")({
  query: e => console.log(e.query)
});


const db = pgp({
  connectionString: process.env.DB_Connection_String
});

console.log(`Database information: ${process.env.DB_Connection_String}`);

module.exports = db