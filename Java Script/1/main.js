const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

let searchText="teri maa ki chuut"
let siteName="chut ka deewana"
 let arr =[,243,43,54,56]

app.use((req,res,next)=>{
    console.log("teri maa ki chut bhadve ")
    next();
});

app.get('/', (req, res) => {
  let title ="teeri ma ki chut "
  let content = "teeri maa ki chut is a gali used to get a fluing person in ground "
      res.render("index", {siteName , searchText,arr})
})



// app.get('/info', (req, res) => {
//     console.log("bhadva")
//     res.render("templates\\index.html", {title:title, content:content})
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})