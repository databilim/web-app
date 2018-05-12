const express = require('express');
const router = express.Router();

const GenelAyar = require("../model/GenelAyar");

const Firma = require("../model/FirmaAyar");

const slugify = require('slugify')

/* GET users listing. */
router.get('/genelAyar', (req, res, next)=> {


    const genelayar = GenelAyar.findOne().select("title description keywords siteUrl");

    genelayar.then((ayar)=>{

       res.json(ayar)
    }).catch((err)=>{

       res.json(err)
    })

});

router.get('/firma', (req, res, next)=> {


    const firma = Firma.findOne();

    firma.then((ayar)=>{

        res.json(ayar)
    }).catch((err)=>{

        res.json(err)
    })

});


module.exports = router;
