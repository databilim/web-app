const express = require('express');
const router = express.Router();
const SayfaMenu = require("../model/SayfaMenu");
const slugify = require('slugify')


/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('respond with a resource');
});

router.post("/",(req,res,next)=>{

    const seoUrl = slugify(req.body.adi)
        req.body.seoUrl = seoUrl;
    const kategori = new SayfaMenu(req.body)
    const promise = kategori.save();

    promise.then((data)=>{

        res.json({status:1})
    }).catch((err)=>{

       res.json(err)
    })
})

router.put("/:sayfamenu_id",(req,res,next)=>{
    const seoUrl = slugify(req.body.adi)
    req.body.seoUrl = seoUrl;
    const promise = SayfaMenu.findByIdAndUpdate(
        req.params.sayfamenu_id,
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
router.delete("/:sayfamenu_id",(req,res,next)=>{

    const promise = SayfaMenu.findByIdAndRemove(req.params.sayfamenu_id)

    promise.then((data)=>{

        res.json({status:1})

    }).catch((err)=>{

        res.json({error:{message:err.message ="Bir hata oluştu ",code:3 }})
    })

})
module.exports = router;
