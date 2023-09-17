const mongoose=require('mongoose');
const schema=mongoose.Schema;
const apiSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const apiModel=mongoose.model("users",apiSchema);
module.exports=apiModel;