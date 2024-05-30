const mongoose= require('mongoose');


const connectDatabase =()=>{
    mongoose.connect(process.env.BB_URL).then((con) =>{
        console.log('MongoDB connected to host:' +con.connection.host)
    })
};

module.exports=connectDatabase;