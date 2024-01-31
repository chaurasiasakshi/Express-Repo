const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// View EJS  engine and static files
app.set("view engine","ejs");
// set path
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

// Roll Dice 

app.get("/rolldice",(req,res)=>{
    let  diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", { diceVal });
});
app.get("/msg",(req,res)=>{
    res.send("sending a msg");
});

// Instagram  EJS

app.get("/ig/:username",(req,res)=>{
    const follower = ["sak","sam","ria","ami","suku"]
    let{ username } = req.params;
    // console.log(username);
    res.render("instagram.ejs", { username , follower});
})


 app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
 });