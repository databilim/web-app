const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const IcerikSchema = new Schema({
    dil:{
      type:String,

    },
    baslik:{
        type:String,

    },
    seoUrl:{
        type:String,
    },
    icerik:{
        type:String,
    },

    keywords:[],

    resim:[],


    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },
    sira:{
        type:Number,

    },


})

module.exports = mongoose.model('icerik', IcerikSchema)
