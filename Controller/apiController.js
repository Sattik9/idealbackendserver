const Apis=require("../Model/apiModel");

const views=async(req,res)=>{
    try{
        const result=await Apis.find();
        res.status(200).json({
            success:true,
            message:"data fetched successfully",
            data:result
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Error",
            })
    }
}

const creation=async(req,res)=>{
    try{
        const result=new Apis({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city
        })
        const output=await result.save();
        res.status(200).json({
            success:true,
            message:"data created successfully!",
            data:output
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Error",
            
        })
    }
}

const edit=async(req,res)=>{
    try{
        const result=await Apis.findById(req.params.id);
        res.status(200).json({
            success:true,
            message:"data found!",
            data:result
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"data not found!",
            
        })
    }
}

const update=async(req,res)=>{
    try{
        const result=await Apis.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            success:true,
            message:"data updated successfully!",
            data:result
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Error"
            
        })
    }
}

const deletion=async(req,res)=>{
    try{
        const result=await Apis.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:"data deleted successfully!",
            
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Error"
            
        })
    }
}

module.exports={views,creation,edit,update,deletion};