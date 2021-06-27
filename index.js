const express = require("express")
const app = express()
const port = 8000


app.use(express.static('src'));
path = __dirname + "/src"

app.get("/", (req, res)=>{
    res.sendFile(path + "/index.html")
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})