const express = require('express');
const router = express.Router();
const Ebulten = require('../model/Ebulten');
/* GET home page. */
router.post('/ebulten', (req, res, next)=> {

    const ebulten = new Ebulten(req.body)

    const promise =  ebulten.save();

    promise.then((bulten)=>{

        res.json({status:1,mesaj:"Ebulten eklendi"})
    }).catch((err)=>{

        res.json({status:0,mesaj:"Hata Eklenemiyor",err:err})

    })


});


router.post('')

module.exports = router;
