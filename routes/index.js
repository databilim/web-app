const express = require('express');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
/* GET home page. */
router.get('/', (req, res, next)=> {
  //console.log(res.kategori)
  //res.render('index', { title: 'Aquturk' ,static:res});
    res.sendFile("index.html")
});


router.get('/:seuUrl'+".html", (req, res, next)=> {

    const url =  req.params;
    console.log(url)

    res.sendFile("detay.html")


});


module.exports = router;
