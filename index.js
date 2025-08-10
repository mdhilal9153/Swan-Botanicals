const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");


app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));


app.get("/home",(req,res) => {
    res.render("home.ejs");
})

app.get("/ourstory",(req,res) => {
    res.render("ourstory.ejs");
})

app.listen(8080,() => {
    console.log("server is listening on port 8080...");
})