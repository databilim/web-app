const express = require('express');
const router = express.Router();
const Firma = require("../model/FirmaAyar");
const slugify = require('slugify')
/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});


// Genel ayar tablosu oluşturmak
router.post("/",(req,res,next)=>{

   const count = Firma.count();
  count.then((toplam)=>{

      if(toplam >= 1 ){

          res.json({message:"Firma ayar Tablosu zaten mevcut",code:1})
      }else{

          const firma = new Firma(req.body)
          const promise = firma.save();

          promise.then((data)=>{

              res.json({status:1})
          }).catch((err)=>{

              res.json(err)
          })
      }

  }).catch((err)=>{

      res.json(err)
  })
/*
    */
})


/*  Guncelleme ıd ye göre   */
router.put("/",(req,res,next)=>{

    const cek = Firma.findOne()
       //son eklenen id yi çekiyoruz  zaten db ye 1 adet ekleyebilir onu çekkiyoruz
        cek.then((ayar)=>{


            const promise = Firma.findByIdAndUpdate(
                ayar._id,
                req.body,
                {
                    new : true
                }

            );

            promise.then((data)=>{
                //if(!data)
                // next({message:"Dosya Eklemede sorun ile karşılaştı"})
                res.json({status:1,message:"güncellendi"})

            }).catch((err)=>{

                res.json({error:{message:err.message ="Bir hata oluştu ",code:2 }})
            })


        }).catch((err)=>{


            res.json(err)


        })


})


module.exports = router;
