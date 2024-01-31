const db = require('../db')
db.connect();

const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: false,
    },
    status:{
        type:String,
        default: "activ",
        
    },
    isActive: {
        type: Boolean,
        default: true,
    }


})

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel