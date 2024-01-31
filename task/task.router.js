const express = require("express")
const router = express.Router();
const taskService = require("./task.service")


// get all the tasts 
router.get("/", async (req, res) => {
    try {
        let tasks = await taskService.getAllTasks(req.body)
        // console.log("r", tasks);
        if (tasks.length > 0) res.send(tasks)
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})

// get one task 
router.get("/:taskId", async (req, res) => {
    try {
        let id = req.params.taskId;
        let oneTask = await taskService.getOneTask(id);
        // console.log("r", oneTask);
        if (oneTask) res.send(oneTask)
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})

// add task 
router.post("/" , async (req, res)=>{
    try {
        let body = req.body;
        let newTask = await taskService.createTask(body)
        // console.log("r" , newTask);
        res.send(newTask)
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})

//update task by id 
router.put("/:taskId" , async (req, res)=>{
    try {
        let id = req.params.taskId;
        let body =  req.body;
        let task = await taskService.updateTask(id, body);
        // console.log("r" , task);
        if (task) res.send({"u just update ur task" : task})
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})


//update task by filter 
router.put("/" , async (req, res)=>{
    try {
        let filter = req.params.filter;
        let body = req.body;
        let tasks = await taskService.updateByFilter(filter , body);
        // console.log("r" , tasks);
        if(tasks) res.send({ "hopa u just update this user": tasks})
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})


// delete task
router.delete("/:taskId" , async (req , res)=> {
    try {
        let id = req.params.taskId;
        let task = await taskService.delTask(id)
        console.log("r", task);
        if (task) res.send ( "task is deleted");
    } catch (err) {
        res.status(455).send("something went wrong :/")
    }
})





module.exports = router;