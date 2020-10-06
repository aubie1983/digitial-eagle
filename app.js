const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
var port = process.env.PORT || 3000

app.get('/',(req, res) => {
   res.sendFile(path.join(__dirname+ '/index.html'))

})

app.listen(port, ()=>{
    console.log("Terminal is running")
})