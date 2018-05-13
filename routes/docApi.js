const express = require('express');
const router = express.Router();

const GenelAyar = require("../model/GenelAyar");

const Firma = require("../model/FirmaAyar");
const SayfaMenu = require("../model/SayfaMenu");
const Slider = require("../model/Slider");

const slugify = require('slugify')

/* GET users listing. */
router.get('/genelAyar', (req, res, next)=> {


    const genelayar = GenelAyar.findOne().select("title description keywords siteUrl copyright");

    genelayar.then((ayar)=>{

       res.json(ayar)
    }).catch((err)=>{

       res.json(err)
    })

});

router.get('/slider', (req, res, next)=> {


    const slider = Slider.find();

    slider.then((ayar)=>{

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

router.get('/SayfaMenu', (req, res, next)=> {


    const sayfaMenu = SayfaMenu.find().sort({sira:1});

    sayfaMenu.then((ayar)=>{

        res.json(ayar)
    }).catch((err)=>{

        res.json(err)
    })

});

module.exports = router;
