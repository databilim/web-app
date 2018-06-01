const express = require('express');
const router = express.Router();
const Icerik = require("../model/Icerik");
const slugify = require('slugify')


/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

router.post("/",(req,res,next)=>{

    console.log(req.body)


    const seoUrl = slugify(req.body.baslik)
        req.body.seoUrl = seoUrl;
    const icerik = new Icerik(req.body)
    const promise = icerik.save();

    promise.then((data)=>{

        res.json({status:1})
    }).catch((err)=>{

       res.json(err)
    })
})

router.put("/:icerik_id",(req,res,next)=>{
    const seoUrl = slugify(req.body.baslik)
    req.body.seoUrl = seoUrl;
    const promise = Icerik.findByIdAndUpdate(
        req.params.icerik_id,
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
router.delete("/:icerik_id",(req,res,next)=>{

    const promise = Icerik.findByIdAndRemove(req.params.icerik_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu ",code:3 }})
    })

})
module.exports = router;
