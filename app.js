const express = require('express')
const fs = require('fs')
const app = express()
var port = process.env.PORT || 3000
var html = fs.readFileSync('index.html')

app.get('/',(req, res) => {
   res.send('How does this work')

})


app.listen(port, ()=>{
    console.log("Terminal is running")
})