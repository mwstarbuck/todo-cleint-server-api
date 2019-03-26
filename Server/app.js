

const express = require('express')
const app = express()
const cors = require('cors')
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
let PORT = 3000
let toDoList = []

app.get('/todos', function (req, res) {
    console.log("working")
    res.json(toDoList)
})

app.post('/todos', function (req, res) {
    console.log("received POST request")
    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    todo = new ToDo(title, priority, dateCreated)
    toDoList.push(todo)
    res.json({ todo })
})

app.listen(PORT, function () {
    console.log("Server is running...")
})

class ToDo {
    constructor(title, priority, dateCreated) {
        this.title = title
        this.priority = priority
        this.dateCreated = dateCreated
        this.dateCompleted = "Not Completed"
        this.isCompleted = false
    }
}