const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const KategoriSchema = new Schema({
    ust_id: String,
    menu_id: String,
    adi:{
        type:String,
        required:true,
    },
    type:{
      type:String,
    },
    seoUrl:{
        type:String,
    },
    link:{
        type:String,
    },

    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },
    lokasyon:{
        type:String,
        maxlength: 25,

    },
    sira:{
        type:Number,

    },


})

module.exports = mongoose.model('sayfaMenu', KategoriSchema)
