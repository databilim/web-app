const marka = require("../model/UrunMarka");

module.exports = (req,res,next)=>{

    const cek = marka.find({}).sort({sira:1});

    cek.then((data)=>{

       res.urunMarka = data    
     //  console.log(data)
       next()
    }).catch((err)=>{

        res.json(err)
        next()
    })

  
}