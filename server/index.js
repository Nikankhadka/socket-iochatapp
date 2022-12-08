
//import express fn then create app instance
const express=require("express")
const app=express()


//necessary imports
const cors=require("cors")
const cookieparser=require("cookie-parser")
const session=require("express-session")
const passport=require("passport")
require("dotenv").config()




//app level middle ware

//parses json format property from client side 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*",
    credentials:true
}
))
app.use(session({
    secret:process.env.sessionSecret,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24,
       

    },
}))

app.use(cookieparser())

//these middle ware function will initilize and allow passport to use session
app.use(passport.initialize());
app.use(passport.session()); 



//register the router instacne in middleare
app.use("/authRoute",require("../server/routes/authRoute"))








//listening to server
app.listen(2900,()=>{
    console.log(`server listening on port 2900`)
})

