const mongoose=require("mongoose")


const connectDB=(req,res,next)=>{
    try{
        mongoose.connect("mongodb://localhost:27017/revision").then(()=>{
            console.log("database connected")
            next()
        }).catch((err)=>{
            console.log(err)
        })
    }catch(e){{
        console.log(er)
    }}
  
}

module.exports=connectDB