const Firma = require("../model/FirmaAyar");

module.exports = (req,res,next)=>{

    const cek = Firma.findOne();

    cek.then((data)=>{

       res.firma = data    
       next()
    }).catch((err)=>{

        res.json(err)
        next()
    })

  
}