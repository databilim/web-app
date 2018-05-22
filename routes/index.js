const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');


router.get('/:siteUrl', (req, res, next)=> {
    const url =  req.params;

    const menu = SayfaMenu.findOne({seoUrl:url.siteUrl})

    menu.then((data)=>{
        if(data.type == "urunler" ){
            res.render("urunler",{ res:res })
        }
        if(data.type == "icerik"){
            res.render("sayfa",{ res:res })
        }
        if(data.type == "iletisim"){
            res.render("sayfa",{ res:res })
        }else{
            res.send("HATA ")
        }

    }).catch((err)=>{
        console.log(err)
        res.send("HATA ")
    })
    console.log(url)
    

});

/* GET home page. */
router.get('/', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')

    res.render("index" , { res:res })
    //console.log(res.genelayar)


});




module.exports = router;
