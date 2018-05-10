const mongoose = require("mongoose");


module.exports = ()=>{

    mongoose.connect("mongodb://web-site:Test1234@ds119150.mlab.com:19150/web-site");

    mongoose.connection.on("open",()=>{
        console.log(" MongoDB : Bağlandı ")
    })
    mongoose.connection.on("error",(err)=>{
        console.log(" MongoDB : Hata  ",err)
    })

    mongoose.Promise = global.Promise;
};