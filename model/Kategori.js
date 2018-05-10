const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const KategoriSchema = new Schema({
    ust_id: Schema.Types.ObjectId,
    adi:{
        type:String,
        required:true,
    },
    seoUrl:{
        type:String,
    },

    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },
    sira:{
        type:Number,

    }

})

module.exports = mongoose.model('kategori', KategoriSchema)
