const express = require('express');
const router = express.Router();
const UrunMarka = require("../model/UrunMarka");
const UrunOzellik = require("../model/UrunOzellik");
const slugify = require('slugify')


/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

router.post("/",(req,res)=>{
    console.log(req.body)

    const  urunozellik =  new UrunOzellik(req.body)
    const  urunOzellikPromise = urunozellik.save();
    urunOzellikPromise.then((data)=>{

        res.json({status:1,data:data, message:"Eklendi Ürünler Özellik  Tablosuna "})
    }).catch((err)=>{

        res.json(err)
    })


})

router.put("/:urunOzellik_id",(req,res)=>{

    const promise = UrunOzellik.findByIdAndUpdate(
        req.params.urunOzellik_id,
        req.body,
        {
            new : true
        }

    );
    promise.then((data)=>{
        //if(!data)
        // next({message:"Dosya Eklemede sorun ile karşılaştı"})
        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu ÜRN Özellik Ekle  ",code:66 }})
    })



})

router.delete("/:urunOzellik_id",(req,res)=>{
    const promise = UrunOzellik.findByIdAndRemove(req.params.urunOzellik_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu Urun  silme de  ",code:67}})
    })



})

module.exports = router;
