const taskModel = require("./task.model")

// get all the tasks 
async function read(filter = {}) {
    let tasks = await taskModel.find({ ...filter })
    // console.log("c", tasks);
    return tasks
}

//get just one task 
async function readOne(id) {
    let task = await taskModel.findById(id)
    // console.log("c", task);
    return task;
}

// add task 
async function create(data) {
    let newTask = await taskModel.create(data);
    // console.log("c", newTask);
    return newTask;
}

async function updateById(filter, data){
    return await taskModel.updateOne(filter, data)
}

// update task by filter 
async function update(filter, data) {
    let taskUpdeted = await taskModel.updateOne(filter, data);
    // console.log("c" ,taskUpdeted);
    return taskUpdeted;
}

//delete task 
// async function del (id){
//     let task = await taskModel.findByIdAndUpdate({id , isActive: false})
//     console.log("c", task);
//     return "all good" 
// }


async function del(id) {
    return await taskModel.updateOne({_id: id}, {$set: {isActive: false}});
}





module.exports = { readOne, create, updateById, update, del, read}







// const starter = async () => {
//     const db = require("../db");
//     db.connect();
//     let res = await create({
//         nameTask: "home-work",

//     })
//     console.log(res);
// }
// starter()
