
const {getConnection,sql} = require('../database/conexion')
const {getAllEquipment} =require('../database/querys')

exports.getEquipment=async(req,res)=>{
   try {
       const pool = await getConnection()
       const result = await pool.request().query(getAllEquipment)

       console.log(result.recordset)
       
   } catch (error) {
       console.log(error)
   }
}


//GET BY ID

//UPDATE

//DELETE
