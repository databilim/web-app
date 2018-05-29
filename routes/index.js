const express = require('express');
const path = require('path');
const router = express.Router();
const SayfaMenu = require('../model/SayfaMenu');
const Urun = require('../model/Urun');
const os = require("os");
const mongoose      =   require("mongoose");

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




module.exports = router;
