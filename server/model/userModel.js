const mongoose=require("mongoose")
const {hashPassword,comparePassword}=require("../config/hash")


//basic user schema made here u can also define multiple schem anbd nest shema as a type of its own
const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
    }
})

//now creare a model instance for the collection with the schem agiven above which defines the structure fo the document 


//donnot export if exported use this keyword to acess it
const userModel=mongoose.model("user",userSchema)

//with this model instance we can perform crud query function



const registerUser=async(username,password)=>{
    try{

       
        const checkUser=await userModel.findOne({
            username:username
        })
        //single line if else statement
        if(checkUser) return false;

        const newUser=await userModel.create({
            username:username,
            password:await hashPassword(password)
        })
        newUser.save();
        return true;

    }catch(e){
        console.log(e)
    }
}

//verify user function

const verifyUser=async(username,password)=>{
    try{

        const user=await userModel.findOne({
            username:username
        })
        if(user) if(await comparePassword(password,user.password)){
            return user;
        }

        //once the nested if statemnt is over or not staisfied the sequential runningh will continue since else was not used
        return false;


    }catch(e){
        console.log(e)
    }
}










module.exports={userModel,registerUser,verifyUser}