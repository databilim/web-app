const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UrunSchema = new Schema({
    urunMarka_id : Schema.Types.ObjectId,
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
    aciklama:{
        type:String,
    },
    keywords:[],

    resim:[],
    kategori:[],

    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },
    sira:{
        type:Number,

    },


})

module.exports = mongoose.model('urun', UrunSchema)