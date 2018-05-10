const express = require('express');
const router = express.Router();
const Kategori = require("../model/Kategori");
const slugify = require('slugify')


/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

router.post("/",(req,res,next)=>{

    const seoUrl = slugify(req.body.adi)
        req.body.seoUrl = seoUrl;
    const kategori = new Kategori(req.body)
    const promise = kategori.save();

    promise.then((data)=>{

        res.json({status:1})
    }).catch((err)=>{

       res.json(err)
    })
})

router.put("/:kategori_id",(req,res,next)=>{
    const seoUrl = slugify(req.body.adi)
    req.body.seoUrl = seoUrl;
    const promise = Kategori.findByIdAndUpdate(
        req.params.kategori_id,
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
router.delete("/:kategori_id",(req,res,next)=>{

    const promise = Kategori.findByIdAndRemove(req.params.kategori_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu ",code:3 }})
    })

})
module.exports = router;
