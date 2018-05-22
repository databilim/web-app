const slider = require("../model/Slider");

module.exports = (req,res,next)=>{

    const cek = slider.find({}).sort({sira:1});

    cek.then((data)=>{

       req.slider = data
       //console.log(data)
       next()
    }).catch((err)=>{

        res.json(err)
        next()
    })

  
}