const express = require("express");

const app = express();


let port = 3000;

app.listen(port,(err)=>{
    if(!err) 
    console.log(`Server is running on Port : ${port}`);
});

// app.use((req,resp)=>{
//     console.log("request received!!");
//     // resp.send("This is Response from me");
//     // resp.send({
//     //     name:"sakshi",
//     //     age:20
//     // });
//     let code = "<h1>SEND RESPONSE using send method</h1>";
//     resp.send(code);
// });

app.get("/",(req,resp)=>{
    resp.send("You are on ROOT path");
});
app.get("/about",(req,resp)=>{
    resp.send("You are on About path");
});
app.get("/contact",(req,resp)=>{
    resp.send("You are on ContactUS path");
});
app.get("*",(req,resp)=>{
    resp.send("This path doesn't exit");
});
app.post("/",(req,resp)=>{
    resp.send("We request POST  Method here");
});