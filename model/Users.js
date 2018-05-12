const mongoose      =   require("mongoose");
const Schema        =   mongoose.Schema;

const UsersSchema = new Schema({
   name:{
       type:String,
       required:true,
       unique:true

   },
    password:{
        type:String,
        minlength:5
    }
})

module.exports = mongoose.model('user', UsersSchema)