const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("hello")
})

server.listen(2000,()=>{
    console.log("connected");
})