const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UrunSchema = new Schema({
    urunMarka_id : Schema.Types.ObjectId
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

module.exports = mongoose.model('urun', UrunSchema)
