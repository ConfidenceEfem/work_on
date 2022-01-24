const express = require("express")
const mongoose = require("mongoose");
const router = express.Router()
const Pratice = require("./praticeModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.get("/", async(req,res)=>{
    try{
        const getData = await Pratice.find()
        res.status(201).json({message: "All registered Data", data: getData}) 
    }catch(error){
        res.send({message: error.message})
    }
})

router.post("/register", async (req,res)=>{
    try{
        const{email, password} = req.body
        const saltPassword = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, saltPassword)
        const createuser = await Pratice.create({
            email,
            password: hashPassword,
        })
        res.status(201).json({message: `${email} has successfully been registered`, data:createuser})
    }catch(error){
        res.send({message: error.message})
    }
})

router.post("/signin", async (req,res)=>{
    try{
        const {email, password} = req.body
        const finduser = await Pratice.findOne({email})
        if(finduser){
            const checkPassword = await bcrypt.compare(password, finduser.password)
            if(checkPassword){
                const token =  await jwt.sign(
                    {id: finduser._id, email: finduser.email}, "This is my Secret", {expiresIn: "1d"}
                )
                res.status(201).json({message: `Welcome ${finduser.email}`, data: {email, password}, token})
            }else{
                res.status(404).json({message: "Either your email or password is incorrect"})
            }
        }else{
            res.status(404).json({message: "User does not exist"})
        }
    }catch(error){
        res.send({message: error.message})
    }
})


module.exports = router