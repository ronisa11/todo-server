const mongoose = require("mongoose");
const MONGO_URL = 
"mongodb+srv://test:1234@cluster0.onb7tvx.mongodb.net/roni?retryWrites=true&w=majority";

function connect() {
    try {
        mongoose.connect(MONGO_URL).then(()=>{
            console.log("DB - connection  success");
        });
    } catch (err) {
        console.log("MongoDB Error", err);   
    }
    
}

//  connect();

 module.exports ={connect}