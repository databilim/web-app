const express = require('express');
const router = express.Router();
const GenelAyar = require("../model/GenelAyar");
const slugify = require('slugify')
/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});


// Genel ayar tablosu oluşturmak
router.post("/",(req,res,next)=>{

   const count = GenelAyar.count();
  count.then((toplam)=>{

      if(toplam >= 1 ){

          res.json({message:"Genel ayar Tablosu zaten mevcut",code:1})
      }else{

          const genelAyar = new GenelAyar(req.body)
          const promise = genelAyar.save();

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

    const cek = GenelAyar.findOne()
       //son eklenen id yi çekiyoruz  zaten db ye 1 adet ekleyebilir onu çekkiyoruz
        cek.then((ayar)=>{


            const promise = GenelAyar.findByIdAndUpdate(
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
