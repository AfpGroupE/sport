const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    
    user: 'postgres',
    password: 'Server',
    host: "localhost",
    port: 5432,
    database: 'applikacio',
 }
)
module.exports = pool