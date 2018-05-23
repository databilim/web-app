const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const SliderSchema = new Schema({
    dil:{
        type:String
    },
   title:{
        type:String
    },
    title2:{
        type:String
    },
    title3:{
        type:String
    },
    title4:{
        type:String
    },
    info:{
        type:String
    },

    info2:{
        type:String
    },
    link:{
        type:String
    },
    resim:{
        type:String
    },
    html:{
      type:String
    },

    sira:{
        type:Number,
        maxlength:3,
    }
    ,
    createAt:{
        type:Date,
        default:Date.now,
    },

})

module.exports = mongoose.model('slider', SliderSchema)
