const userModel=require('../models/user.model');
const userService=require('../services/user.service');



module.exports.registerUser=async (req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {firstname,lastname,email,password}=req.body;

const hashPassword=await userModel.hashPassword(password);

const user=await userService.createUser({
    firstname,
    lastname,
    email,
    password:hashPassword
});

const token=user.genetateAuthToken();
res.status(201).json({data:user,token});



}