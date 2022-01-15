const express = require("express");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("Public"));

items = [];

app.get("/", function(req, res)
    {
        var today = new Date();
       
        var currentday = today.getDay();
        
        var options = {
            weekday : "long",
            day : "numeric",
            month : "long"    
        };

        var day = today.toLocaleDateString("en-US", options);
        // var day = today.toLocaleDateString("hi-IN", options);
        
        res.render("list", {kindOfDay : day, newListItem : items});



    });

app.post("/", function(req,res)
    {
        var item = req.body.newItem;
        items.push(item);
        res.redirect("/");
        // console.log(item);
        // res.send(item);//"Website up and running");
    })


app.listen(3000, function()
    {
        console.log("server is running @ 3000");
    })

