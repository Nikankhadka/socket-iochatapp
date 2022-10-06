//initial necessary imports
const express=require("express");
const app=express();
const port=2900;




//setup middle ware functions 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//setup simple routes to check whether the server is runnin or not













//start the express server
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})