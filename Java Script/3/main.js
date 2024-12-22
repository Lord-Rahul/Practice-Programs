// generate a dummy data in this format in a clooection called employee in a db called company 
// { // name: "Harry",
//  // salary: 45000000, 
// // language: "Python", 
// // city: "New York", 
// // isManager: true // }

// Generate 10 such records when a button called generate data is clicked! // Create an Express app with mongoose to acheive it // Everytime the button is clicked, you should clear the collection

import mongoose from "mongoose";
import express from "express"
import employee from "./models/employee.js";
const app = express()
const port = 3000


await mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');


const get_random = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


let siteName = "wellbeings";
let searchText = "search";

app.get('/', (req, res) => {
    res.render("index", { siteName, searchText })
})

app.get('/generate', async (req, res) => {

    await employee.deleteMany({})

    // generate random data
    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]

    for (let i = 0; i < 10; i++) {
        let e = await employee.create({

            name: get_random(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: get_random(randomLang),
            city: get_random(randomCities),
            isManager: Math.random() > 0.5 ? true : false




        })

        await e.save()
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})