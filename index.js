const express = require("express");

const app = express();

// console.dir(app);

let port = 8080;

app.listen(port,(err)=>{
    if(!err) 
    console.log(`Server is running on Port : ${port}`);
});