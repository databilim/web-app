const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
const Urun = require('../model/Urun');
const os = require("os");

router.get('/:siteUrl', (req, res, next)=> {
    const url =  req.params;

    const menu = SayfaMenu.findOne({seoUrl:url.siteUrl})

    menu.then((data)=>{
        if(data.type === "urunler" ){

            const urun =  Urun.find();


            urun.then((urundata)=>{
                res.render("urunler",{urunler:urundata ,data:data, res:req })

            }).catch((err)=>{

            })



        }
        if(data.type === "icerik"){




            res.render("sayfa",{ data:data, res:req })
        }
        if(data.type === "iletisim"){
            res.render("sayfa",{ data:data ,res:req })
        }

    }).catch((err)=>{
        console.log(err)
        res.send("HATA ")
    })
    console.log(url)
    

});

/* GET home page. */
router.get('/urun/:urun/:urunid', (req, res, next)=> {

    const uruncek = Urun.findOne({_id:req.params.urunid});
    uruncek.then((urunData)=>{

        console.log("Cello ",urunData)

        res.render("urundetay",{ urun:urunData, res:req })

    }).catch((err)=>{

        res.json(err)
    })



    console.log(req.params)
});
/* GET home page. */
router.get('/', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')

    res.render("index" , { res:req })

    console.log(req.params)

});




module.exports = router;
