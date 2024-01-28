const express = require("express");

const app = express();


let port = 3000;

app.listen(port,(err)=>{
    if(!err) 
    console.log(`Server is running on Port : ${port}`);
});

app.use((req,resp)=>{
    console.log("request received!!");
})