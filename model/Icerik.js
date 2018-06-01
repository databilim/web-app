const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const IcerikSchema = new Schema({
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
    description:{
        type:String,
    },

    keywords:{
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

module.exports = mongoose.model('icerik', IcerikSchema)
