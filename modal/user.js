const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    age:{
        type:Number,
        required:[true,"age is required"]
    }
})


module.exports=mongoose.model("Users",userSchema)