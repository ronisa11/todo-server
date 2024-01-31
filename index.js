const express = require('express')
const cors = require("cors");
const PORT = 2004
const taskRouter = require('./task/task.router')
const db = require("./db")

const app = express();
db.connect()
app.use(cors());
app.use(express.json());

app.use("/task", taskRouter)

app.listen(PORT, ()=> console.log(`*** 🌡️ server is up 🌡️ ***${PORT}`));
