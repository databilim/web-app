const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UrunSchema = new Schema({
    urunMarka_id : Schema.Types.ObjectId,
    menu_id: Schema.Types.ObjectId,
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
    keywords:{
        type:String
    },

    description:{
        type:String
    },

    resim: {
        type:String
    },
    resim2: {
        type:String
    },

     resim3: {
        type:String
    },

     resim4: {
        type:String
    },

     resim5: {
        type:String
    },

    kategori:{
        type:String
    },
    fiyat:{
        type:String
    },
  satinalUrl:{
        type:String
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

module.exports = mongoose.model('urun', UrunSchema)
