const bcrypt=require("bcrypt")

require("dotenv").config()



const hashPassword=async(text)=>{
    try{
        const hashedPassword=await bcrypt.hash(text,10)
        return hashedPassword
    }catch(e){
        console.log(e)
    }
}

const comparePassword=async(text,hashedText)=>{
    try{
        const isMatch=await bcrypt.compare(text,hashedText)
        return isMatch

    }catch(e){
        console.log(e)
    }
}

module.exports={hashPassword,comparePassword}