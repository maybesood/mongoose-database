const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true
    },
    hobbies:[String]
})

module.exports=mongoose.model("User",userSchema)