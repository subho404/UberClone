const mongoose=require('mongoose');

function conectDB(){
    mongoose.connect(process.env.DB_CONNECT,).then(()=>{
        console.log('Connected to DB');
    }).catch(err=>console.log(err));

}

module.exports=conectDB;