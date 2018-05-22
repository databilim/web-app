const GenelAyar = require("../model/GenelAyar");

module.exports = (req,res,next)=>{

    const cek = GenelAyar.findOne();

    cek.then((data)=>{

       req.genelayar = data
       next()
    }).catch((err)=>{

        res.json(err)
        next()
    })

  
}