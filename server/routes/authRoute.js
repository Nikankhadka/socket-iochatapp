const {Router}=require("express")
require("../config/strategy")
const db=require("../config/db")
const {registerUser,loginUser}=require("../controller/authController")
//create router instacen 
const router=Router();

router.use(db)



//define Auth routes
router.post("/registerUser",registerUser)

router.post("/login",loginUser)






//export router
module.exports=router;
