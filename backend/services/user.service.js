const userModel = require('../models/user.model');

module.exports.createUser = async({
    fisrtname,lastname,email,password
})=>{

    if(!fisrtname || !email || !password){
        throw new Error('All fields are required');

    }

    const user=userModel.create({
        fullname:{
            fisrtname,
            lastname
        },
        email,
        password
    })

    return user;
}