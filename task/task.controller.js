const taskModel = require("./task.model")

// get all the tasks 
async function readAll(filter = {}) {
    let tasks = await taskModel.find({ ...filter })
    // console.log("c", tasks);
    return tasks
}

//get just one task 
async function readOne(filter) {
    let task = await taskModel.findOne(filter)
    // console.log("c", task);
    return task;
}

// add task 
async function create(data) {
    let newTask = await taskModel.create(data);
    // console.log("c", newTask);
    return newTask;
}

// update task by id
async function updateById(id, data) {
    let taskUpdeted = await taskModel.updateOne({_id:id} ,data)
    // console.log("c" ,  taskUpdeted);
    return taskUpdeted;
}

// update task by filter 
async function update(filter, data) {
    let taskUpdeted = await taskModel.updateOne(filter, data);
    // console.log("c" ,taskUpdeted);
    return taskUpdeted;
}

//delete task 
async function del (id){
    let task = await taskModel.findByIdAndUpdate({id , isActive: fals})
    console.log("c", task);
    return task 
}



module.exports = { readAll, readOne, create, updateById, update, del }







// const starter = async () => {
//     const db = require("../db");
//     db.connect();
//     let res = await create({
//         nameTask: "home-work",

//     })
//     console.log(res);
// }
// starter()
