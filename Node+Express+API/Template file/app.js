const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res)
    {
        res.send("Website up and running");
    })




app.listen(3000, function()
    {
        console.log("server is running @ 3000");
    })


