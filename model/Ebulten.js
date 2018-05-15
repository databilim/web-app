const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const EbultenSchema = new Schema({

    eposta:{
        type:String,

        unique:true,
        maxlength:80,
    },

    createAt:{
        type:Date,
        default:Date.now,
    },



})

module.exports = mongoose.model('ebulten', EbultenSchema)
