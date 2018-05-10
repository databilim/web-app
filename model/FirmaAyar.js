const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const FirmaiSchema = new Schema({

    firma:{
        type:String,
        required:true,
    },
    telefon:{
        type:String,
    },
    fax:{
        type:String,
    },
    email:{
        type:String,
    },
    adres:{
        type:String,
    },
    map:{
        type:String,
    },
    kordinat:{
        type:String,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },


})

module.exports = mongoose.model('firma', FirmaiSchema)
