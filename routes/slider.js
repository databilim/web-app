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


module.exports = router;
