const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UsersSchema = new Schema({
    username:{
       type:String,
       required:true,
       unique:true

   },
    email:{
       type:String,
       required:true,
        unique:true

   },
    phone:{
       type:String,
   },


    password:{
        type:String,
        minlength:5
    },

})

module.exports = mongoose.model('user', UsersSchema)
