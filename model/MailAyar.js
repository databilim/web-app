const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const MailSchema = new Schema({

    yoneticiMail:{
        type:String,
        required:true,
    },
    bilgiMail:{
        type:String,
    },
    smtpHost:{
        type:String,
    },
    smtpPort:{
        type:String,
    },
    smtpUser:{
        type:String,
    },
    smtpPass:{
        type:String,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },


})

module.exports = mongoose.model('mail', MailSchema)
