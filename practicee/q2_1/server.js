const express= require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("static"));

app.get("/data",(req,res)=>{
    res.json({
        message:"this is json data"
    })
})

app.get("/print/:name",(req,res)=>{
    res.json({
        message:`Welcome ${req.params.name}`
    })
})


app.listen(2000,()=>{
    console.log("connected to server")
})