//jshint esversion:6
//jshint esversion:6

const express = require("express");
// const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = {email: String,
                    Password: String};

const User = new mongoose.model("User", userSchema);

app.set('view engine', 'ejs');

app.use(express .urlencoded({
  extended: true
}));
app.use(express.static("public"));

//------------------------------------------------------------------Home Route--------------------------------------------------
app.get("/", function(req, res){
    res.render("home")
});

//----------------------------------------------------------------Register Route-------------------------------------------------
app.get("/register", function(req, res){
    res.render("register")
});

app.post("/register", function(req, res){
    const newUser = new User({
        email: req.body.username,
        Password: req.body.password
    });
    
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.render("secrets");
        }
    });

});
//------------------------------------------------------------------login Route--------------------------------------------------
app.get("/login", function(req, res){
    res.render("login")
});


app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    
});

//--------------------------------------------------------------------Port--------------------------------------------------
app.listen(3000, function() {
  console.log("Server started on port 3000");
});