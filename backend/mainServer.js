const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const router = require("./router")
const port = 8081;
const app = express()
app.use(express.json())
app.use(cors())

const url = "mongodb://localhost/jwtdatabase"
mongoose.connect(url).then(()=>{
    console.log("Connected to database...!")
})

app.use("/", router)

app.listen(port, ()=>{
    console.log("Listening to port",port)
})