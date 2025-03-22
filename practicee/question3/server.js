const express = require('express');
const connect = require('./db.js');
const router = require('./route/empRoute.js');

connect();

const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router);

app.listen(2000,()=>{
    console.log("connected to server")
})