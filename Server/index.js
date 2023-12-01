require('dotenv').config();
const express =require("express")
const myapp=express()
const mongoose =require("mongoose");
const Connet = require('./configs/databasecon');

 const port=2200
Connet()

mongoose.connection.once("open",()=>{
    console.log("connected")
    myapp.listen(port,  ()=>console.log(`running on ${port}`))

})