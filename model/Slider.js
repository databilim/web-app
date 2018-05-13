const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const SliderSchema = new Schema({
    dil:{
        type:String
    },
    adi:{
      type:String
    },
    baslik:{
        type:String
    }
    ,
    baglantisi:{
        type:String,
    },

    createAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('slider', SliderSchema)
