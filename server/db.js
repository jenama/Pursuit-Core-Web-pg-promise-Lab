const pgp = require('pg-promise')({}); //Import pg_promise 

const connectionString = "postgres://localhost:5432/facebook_db"

const db = pgp(connectionString)

module.exports = db;

