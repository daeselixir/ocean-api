const express = require('express')

const cors = require('cors')

const equipmentRoutes=require('./routes/equipmentRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

// app.use('/api',(req,res)=>{
//     res.status(200).json('ok')
// })
//Importar Routes
app.use('/api/',equipmentRoutes)


module.exports = app