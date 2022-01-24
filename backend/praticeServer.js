const express = require('express');
const port = 2020;
const cors = require('cors');
const mongoose = require('mongoose');
const url = "mongodb://localhost/testapi"
const router = require("./PraticeRouter");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(url).then(() => {
    console.log(`database is connected successfully`)
});

app.use("/", router);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`, port);
});