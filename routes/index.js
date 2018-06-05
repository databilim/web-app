const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
const Urun = require('../model/Urun');
const UrunMarka = require('../model/UrunMarka');
const Icerik = require('../model/Icerik');
const os = require("os");
const mongoose      =   require("mongoose");


router.get("/yedekparca/:menu_id",(req,res)=>{

    const uruncek = Urun.find({menu_id:req.params.menu_id})

    uruncek.then((data)=>{

        res.render("yedekparca",{urunler:data, res:req})
    })



})

router.get("/filtreler/:menu_id",(req,res)=>{

    const uruncek = Urun.find({menu_id:req.params.menu_id})

    uruncek.then((data)=>{

        res.render("filtreler",{urunler:data, res:req})
    })



})

router.get('/:siteUrl', (req, res, next)=> {
    const url =  req.params;

    const menu = SayfaMenu.findOne({seoUrl:url.siteUrl})

    menu.then((data)=>{
        if(data.type === "urunler" ){

            const urun =  Urun.find({menu_id:data._id});


            urun.then((urundata)=>{
                res.render("urunler",{urunler:urundata ,data:data, res:req })

            }).catch((err)=>{

            })



        }
        if(data.type === "icerik"){

            menu.then((menu)=>{

                const icerik = Icerik.findOne({menu_id:menu._id})
                icerik.then((icerikler)=>{


                    res.render("sayfa",{ icerik:icerikler,data:data,  res:req })
                })

            })



        }
        if(data.type === "iletisim"){
            res.render("iletisim",{ data:data ,res:req })
        }

    }).catch((err)=>{
        console.log(err)
        res.send("HATA ")
    })
    console.log(url)
    

});

/* GET home page. */
router.get('/urun/:urun/:urunid', (req, res, next)=> {

    const uruncek = Urun.aggregate([
        {
            $match:{
                "_id":mongoose.Types.ObjectId(req.params.urunid)
            }
        },

        ﻿{

            $lookup:{
                from:"urunozeliks",
                    localField:'_id',
                    foreignField:'urun_id',
                    as:'urunozeliks'
            }
        },
        {
            $unwind:{
                path:'$urunozeliks',
                    preserveNullAndEmptyArrays : true, //  true olunca filmi olmayanlarda listelenir
            }
        },
        {

            $group:{
                _id:{
                    _id:'$_id',
                        dil:'$dil',
                        baslik:'$baslik',
                        resim:'$resim',
                        resim2:'$resim2',
                        resim3:'$resim3',
                        resim4:'$resim4',
                        resim5:'$resim5',
                        icerik:'$icerik',
                        aciklama:'$aciklama',
                        durum:'$durum',
                        kategori:'$kategori',
                        keywords:'$keywords',
                        description:'$description',
                        fiyat:'$fiyat',
                        satinalUrl:'$satinalUrl',
                },
                urunozellik:{
                    $push:'$urunozeliks',
                }
            },


        },

    ])

   uruncek.then((urunData)=>{


        res.render("urundetay",{ urun:urunData[0], res:req })


    }).catch((err)=>{

        res.json(err)
    })



});
/* GET home page. */
router.get('/', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')

    res.render("index" , { res:req })

    console.log(req.params)

});

/* Marakalara göre listeleme . */
router.get('/marka/:markaAdi/:marka_id', (req, res, next)=> {

    //res.sendFile(path.dirname(__dirname) + '/view/index.html')
    const uruncek = Urun.find({urunMarka_id:req.params.marka_id})
    const markacek = UrunMarka.findOne({_id:req.params.marka_id})

       uruncek.then((urun)=>{
           markacek.then((marka)=>{
               res.render("marka",{marka:marka ,urunler:urun, res:req })
           })

       })





    console.log(req.params)

});




module.exports = router;
