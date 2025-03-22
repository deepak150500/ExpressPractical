const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    let path  = "./views/";

    switch (req.url) {
        case "/":
            path = path + "home.html";
            break;
        case "/about":
            path = path + "about.html";
            break;
        default:
            res.end("error")
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            res.end(err);
        }else{
            res.end(data);
        }
    })
})


server.listen(2000,()=>{
    console.log("connected to server")
})