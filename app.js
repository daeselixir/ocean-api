const express = require('express')

const cors = require('cors')

const equipmentRoutes=require('./routes/equipmentRoutes')

const app = express()

app.use(express.json())
app.use(cors());

//Importar Routes
app.use('/api',equipmentRoutes)


module.exports = app