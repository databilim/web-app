const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');




/* GET home page. */
router.get('/', (req, res, next)=> {

    res.sendFile(path.dirname(__dirname) + '/view/index.html')





});


router.get('/:siteUrl', (req, res, next)=> {

    const url =  req.params;
    console.log(url)

    res.sendFile(path.dirname(__dirname) + '/view/urunler.html')


});

module.exports = router;
