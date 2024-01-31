const taskController = require("./task.controller");


// get all tasks  
async function getAllTasks() {
    let tasks = await taskController.readAll();
    // console.log("s" , tasks);
    if (!tasks) throw "thete is no tasks"
    return tasks
}

// get one task 
async function getOneTask(id) {
    let task = await taskController.readOne({ _id: id })
    console.log("s", task);
    if (!task) throw " there is no task like this"
    return task
}

// add task 
async function createTask(data) {
    let newTask = await taskController.create(data)
    // console.log("s", newTask);
    return newTask;
}

// update task by id
async function updateTask(id, data) {
    let taskId = await taskController.readOne({ _id: id })
    if (!taskId) throw "there is no task like this"
    let result = await taskController.updateById(taskId, data)
    // console.log("s", result);
    if (!result) throw "Edit failed "
    return taskController.readOne({ _id: id })
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
async function delTask(id){
    // let taskId = await taskController.readOne({_id:id})
    // if(!taskId) throw "there is no task like this"
    let result = await taskController.del(id)
    console.log("s" , result);
    if(!result) throw "delete failed "
    return taskController.readAll()

}

delTask("65ba5998e8a7d0b78bf35208")

module.exports = { getAllTasks, getOneTask, createTask, updateTask , updateByFilter,delTask}