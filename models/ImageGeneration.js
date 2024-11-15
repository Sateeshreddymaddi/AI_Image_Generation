const mongoose=require("mongoose");

const Login=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        userName:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minlength:8,
        }
    }
)

const Generator=mongoose.model("ImageGeneration",Login);
module.exports=Generator;