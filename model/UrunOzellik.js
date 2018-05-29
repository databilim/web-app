const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UrunOzellikSchema = new Schema({
    urun_id : Schema.Types.ObjectId,

    grupAdi:{
        type:String,

    },

    adi:{
        type:String,

    },

    aciklama:{
        type:String,

    },

    resim:{
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

module.exports = mongoose.model('urunOzelik', UrunOzellikSchema)
