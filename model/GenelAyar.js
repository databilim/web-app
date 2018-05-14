const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const GenelyAyarSchema = new Schema({
    siteUrl:String,
    title:String,
    description:String,
    keywords:String,
    copyright:String,
    multiDil:Number,
    FormKoruma:Number,
    Salter:Number,
    SalterTarih:{ type: Date, default: Date.now },
    durum:Number,
    createAt:{
        type:Date,
        default:Date.now,
    },

})

module.exports = mongoose.model('genelayar', GenelyAyarSchema)
