const express = require('express');
const router = express.Router();
const UrunMarka = require("../model/UrunMarka");
const Urun = require("../model/Urun");
const slugify = require('slugify')


/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

router.post("/",(req,res)=>{
    console.log(req.body)

    const seoUrl = slugify(req.body.baslik);
    req.body.seoUrl = seoUrl;

    const  urun =  new Urun(req.body)
    const  urunPromise = urun.save();
    urunPromise.then((data)=>{

        res.json({status:1,data:data, message:"Eklendi Ürünler Tablosuna "})
    }).catch((err)=>{

        res.json(err)
    })
  /*


    const  promise = urunmarka.save()
    promise.then((data)=>{

        res.json({status:1})
    }).catch((err)=>{

        res.json(err)
    })*/


})

router.put("/:urumMarka_id",(req,res)=>{
    const seoUrl = slugify(req.body.adi)
    req.body.seoUrl = seoUrl;
    const promise = UrunMarka.findByIdAndUpdate(
        req.params.urumMarka_id,
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

        res.json({error:{message:err.message ="Bir hata oluştu Marka Ekle  ",code:66 }})
    })



})

router.delete("/:urumMarka_id",(req,res)=>{
    const promise = UrunMarka.findByIdAndRemove(req.params.urumMarka_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu Urun marka silme de  ",code:67}})
    })



})

module.exports = router;
