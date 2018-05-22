const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
const os = require("os");

router.get('/:siteUrl', (req, res, next)=> {
    const url =  req.params;

    const menu = SayfaMenu.findOne({seoUrl:url.siteUrl})

    menu.then((data)=>{
        if(data.type == "urunler" ){
            res.render("urunler",{ data:data, res:req })
        }
        if(data.type == "icerik"){




            res.render("sayfa",{ data:data, res:req })
        }
        if(data.type == "iletisim"){
            res.render("sayfa",{ data:data ,res:req })
        }

    }).catch((err)=>{
        console.log(err)
        res.send("HATA ")
    })
    console.log(url)
    

});

/* GET home page. */
router.get('/urun*:urundetay', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')

    res.send(req.params)
    console.log(res.req.header)
});
/* GET home page. */
router.get('/', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')

    res.render("index" , { res:req })
    console.log(os.hostname())


});




module.exports = router;
