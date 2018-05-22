const sayfa = require("../model/SayfaMenu");

module.exports = (req,res,next)=>{

    const cek = sayfa.find({}).sort({sira:1});

    cek.then((data)=>{

       res.sayfaMenu = data    
       
       next()
    }).catch((err)=>{

        res.json(err)
        next()
    })

  
}