const { default: mongoose } = require("mongoose");
const taskController = require("./task.controller");


// get all tasks  
async function getAllTasks() {
    // הגדרת הפילטר לחיפוש משימות עם הסטטוס "active"
const filter = {
  $and: [
    { status: "active" },
    { isActive: true }
  ]
};
    let tasks = await taskController.read(filter);
    if (!tasks) throw new Error("There are no tasks");
    return tasks;
}



// get one task 
async function getOneTask(id) {
    const mongoId = mongoose.Types.ObjectId.isValid(id)
    if(!mongoId) throw "id not valid"
    let task = await taskController.readOne({ _id: id })
    // console.log("s", task);
    if (!task) throw " there is no task like this"
    return task
}



// add task 
async function createTask(data) {
    let newTask = await taskController.create(data)
    // console.log("s", newTask);
    return newTask;
}

async function updateTask(id, data) {

    let taskId = await taskController.readOne({ _id: id })
    if (!taskId) throw "there is no task like this"
    let result = await taskController.updateById(id, data)
    console.log("s", result);
    if (!result) throw "Edit failed "
    return taskController.readOne({ _id: id })
}



async function updateTask(id, updatedData) {
    // בדיקה אם המוצר קיים
    const filter = { _id: id };
    let taskExists = await taskController.readOne(filter);

    if (!taskExists) {
        return { success: false, message: "Task not found" };
    }

    return await taskController.updateById(filter, updatedData);

}





// update task by filter 
async function updateByFilter(filter , data){
    let result = await taskController.readAll(filter)
    if (!result) throw "there is no task`s filter like this"
    let tasks  = await taskController.update(filter, data);
    // console.log("s" , tasks);
    if (!tasks) throw "Edit failed "
    return taskController.readAll()
}


// delete task
// async function delTask(id){
//     const mongoId = mongoose.Types.ObjectId.isValid(id)
//     if(!mongoId) throw "id not valid"
//     let result = await taskController.del(mongoId)
//     // console.log("s" , result);
//     if(!result) throw "delete failed "
//     return taskController.readAll()

// }



// הגדרת הפונקציה כאסינכרונית




async function delTask(id) {
    const filter = { _id: id };
    let task = await taskController.del(filter);
    if (!task) throw new Error("There is no task");
    return task;
}





module.exports = { getAllTasks, getOneTask, createTask, updateTask , updateByFilter,delTask}