import mongoose from "mongoose";
import express from "express";
import {todo} from "./models/todo.js";


let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const to_do = new todo({ Title: "hey first to do ", desc: "hey this my first toi do task", isDone: false })
    to_do.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})