
//this controller module will contain all the necessary request handler body
//the express fcuntion will remain up to here the model for the database function will be called and get argemtns 

const {registerUser,verifyUser}=require("../model/userModel")

const{generateToken}=require("../config/jwttoken")


//u can use module.export={} or simply exports  if want to exports default function from module then module.exports=function(){}


//exported fcuntion, properties in same module can be called with this. simialr to objects where this keyword is used to define the parent obj
exports.registerUser=async(req,res)=>{
    try{
        //try to destructre and get data 
        const {username,password}=req.body;
        //pass the value in to model for validationa and response 

        const user=await registerUser(username,password);
        

        //can use if if ternary operator and And operator 
        user?res.status(200).json({
            staus:true,
            message:"user registered sucessfully"
        }):res.status(400).json({status:false,message:"user not registered"})

    }catch(e){

    console.log(e)
    }
}

exports.loginUser=async(req,res)=>{

    try{
        const {username,password}=req.body;

        //check user
        const user=await verifyUser(username,password)
        const {accessToken,refreshToken}=await generateToken({userId,role}=user)
        if(user) return res.status(200).cookie("acessToken",accessToken,{httpOnly:true,maxAge:300000}).cookie("refreshToken",refreshToken,{httpOnly:true,maxAge:3000000000}).json({
            loginStaus:true,
            user:user,
        })
        return res.status(401).json({
            loginStaus:false,
            user:null
        })



    }catch(e){
        console.log(e)
    }
}

