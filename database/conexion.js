
const sql =require('mssql')
const config = require('../config')



const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false
    },
};

const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        // console.log('Conectado con la BD' + pool)
       // console.log(pool)
       
    
        return pool
    } catch (error) {
        console.log(error.code);
    }
};

module.exports = {
    dbSettings,
    getConnection,
    sql
}


