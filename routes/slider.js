const express = require('express');
const router = express.Router();
const Slider = require("../model/Slider");
const slugify = require('slugify')
/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

//Slider Ekle
router.post("/",(req,res,next)=>{


    const slider = new Slider(req.body)
    const promise = slider.save();

    promise.then((data)=>{

        res.json({status:1})
    }).catch((err)=>{

        res.json(err)
    })
})


router.post("/:slide_id",(req,res,next)=>{


     const promise = Slider.findByIdAndUpdate(

         req.params.slide_id,

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

            res.json({error:{message:err.message ="Bir hata oluştu ",code:2 }})
        })

})


// sil Fonsiyonu
router.delete("/:slide_id",(req,res,next)=>{

    const promise = Slider.findByIdAndRemove(req.params.slide_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu ",code:3 }})
    })

})
module.exports = router;
