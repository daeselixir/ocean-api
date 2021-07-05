const app = require("./app");
const dotenv = require('dotenv')
const morgan = require('morgan')
const DB = require('./database/conexion')
const {dbSettings} =require('./database/conexion')
const mssql= require('mssql')

dotenv.config({
    path: "./.env",
});

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

mssql.connect({...dbSettings, beforeConnect: conn => {
    conn.once('connect', err => { err ? console.error(err) : console.log('Sql connectd')})
  //  conn.once('end', err => { err ? console.error(err) : console.log('mssql disconnected')})
  }})




const port = process.env.PORT
const host = process.env.HOST_URL

app.listen(port, () => {
    console.log(`App runing in ${host}:${port}...`)
    
})

