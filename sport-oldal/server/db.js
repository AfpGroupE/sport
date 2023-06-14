const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    
    user: 'postgres',
    password: 'passwort',
    host: "localhost",
    port: 5432,
    database: 'applikacio2',
 }
)
module.exports = pool