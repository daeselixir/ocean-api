const express = require("express");
const router = express.Router();
const {getEquipment}=require('../controllers/equipmentController')

router.get('/equipment',getEquipment)


module.exports = router;