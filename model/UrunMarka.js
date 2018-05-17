const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UrunMarkaSchema = new Schema({

    adi:{
        type:String,
        required:true,
    },
    seoUrl:{
        type:String,
    },

    resim:{
        type:String,
    },
    logo:{
        type:String,
    },

    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },
    sira:{
        type:Number,

    },


})

module.exports = mongoose.model('urunMarka', UrunMarkaSchema)
