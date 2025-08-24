const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const listing = require("./models/allprod.js");


app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

main()
.then(() => console.log('connected'))

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/swan-botanicals');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/home",(req,res) => {
    res.render("home.ejs");
})

app.get("/ourstory",(req,res) => {
    res.render("ourstory.ejs");
})

app.get("/allproducts",async (req,res) => {
    let products = await listing.find(); 
    res.render("allproducts.ejs",{products});
});

app.get("/product/:id",async (req,res) => {
    let product = await listing.findById(req.params.id);
    res.render("product.ejs",{product});
});


app.listen(8080,() => {
    console.log("server is listening on port 8080...");
})