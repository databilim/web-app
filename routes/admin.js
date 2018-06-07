const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
const Urun = require('../model/Urun');
const UrunMarka = require('../model/UrunMarka');
const Icerik = require('../model/Icerik');
const os = require("os");
const mongoose      =   require("mongoose");


router.get("/",(req,res)=>{

res.render("root/index")



})




module.exports = router;
