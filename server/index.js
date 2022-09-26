//initial necessary imports
const express=require("express");
const app=express();
const port=2900;




//setup middle ware functions 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//setup simple routes to check whether the server is runnin or not

app.get("/firstroute",(req,res)=>{
    console.log("yes this is inside the first route");
    //similar to js objects u can define own properties
    res.json({
        status:"yes this is inside the first route"
    })
})












//start the express server
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})