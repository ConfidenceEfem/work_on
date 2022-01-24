const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require('cors')
const app = express()
const port = 3222;

app.use(cors())
app.use(express.json()) 

const users = [
    {
        id: "1",
        name: "Confidence Efem",
        email: "efem@gmail.com",
        admin: true
    },
    {
        id: "2",
        name: "Tobi John",
        email: "tobi@gmail.com",
        admin: false
    },
    {
        id: "3",
        name: "Fashola Seun",
        email: "fashola@gmail.com",
        admin: false
    },
]


app.get("/", (req,res)=>{
    const getData = users.find((el)=>{
        return el
    })
    res.json(users)
})

app.post("/", (req,res)=>{
    const {name,id,email,admin} = req.body

    const findUser = users.find((el)=> el.name === name && el.email === email);

    if(findUser){
        const token = jwt.sign(
            {
                id: findUser.id,
                admin: findUser.admin,
                name: findUser.name,
                email: findUser.email,
            },
            "This is your secret key",
            {expiresIn: 60 * 60},
        );
        res.status(201).json({message: "Welcome back", data: {name: findUser.name, admin: findUser.admin}, token})
    } else{
        res.status(400).json({message: "User not found"})
    }
})

app.listen(port, ()=>{
    console.log("Listening to port", port)
})