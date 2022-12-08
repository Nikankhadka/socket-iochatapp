const jwt=require("jsonwebtoken")

require("dotenv").config()


//this fcuntion will generate both token and return obj containing the token
exports.generateToken=async({userId,role})=>{
    try{
        const accessToken=await jwt.sign({userId,role},process.env.accessToken,{expiresIn:300})
        const refreshToken=await jwt.sign({userId,role},process.env.refreshToken,{expiresIn:'30 days'})
       return {accessToken,refreshToken}


    }catch(e){
        console.log(e)
    }
}

