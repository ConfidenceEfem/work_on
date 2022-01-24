const express = require("express")
const mongoose = require("mongoose")
const userModel = require("./model")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get("/", async (req,res)=>{
    try{
        const getuser = await userModel.find()
        res.status(200).json({message: "Successfully outputed", data: getuser})
    }catch(error){
        res.status(404).json(error.message)
    }
})

router.post("/register", async(req,res)=>{
    try {
        const {email, password} = req.body
        const hidePassword = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, hidePassword)
        const createData = await userModel.create({
            email,
            password:hashPassword
        })
        res.status(201).json({message: "Successfully created", data: createData })
    } catch (error) {
        res.status(404).json("Error ")
    }
})

router.post("/signin", async (req, res) => {
    try{
        const {email,password} = req.body;
        const findUser = await userModel.findOne({email})
        if(findUser){
            const myPassword = await bcrypt.compare(password, findUser.password)
            if(myPassword){
                const token = jwt.sign({id: findUser._id}, "This is my secret", {expiresIn: "1d"})
                res.status(201).json({message: "Welcome back User", data: {email: findUser.email, password: findUser.password}, token})
            }else{
                res.status(404).json({message: "Either your password or email is wrong, please check it"})
            }
        }else{
            res.status(400).json({message: "User does not exist"})
        }
    }catch(error){
        console.log(error)
    }
})

module.exports =  router