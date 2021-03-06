const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const KategoriSchema = new Schema({
    ust_id: String,
    adi:{
        type:String,
        required:true,
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
    sira:{
        type:Number,

    },


})

module.exports = mongoose.model('kategori', KategoriSchema)
