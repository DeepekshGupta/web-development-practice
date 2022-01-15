const { response } = require("express");
const express = require("express");
const { STATUS_CODES } = require("http");

const app = express();
const https = require("https");

app.use(express.static("Public"));

app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running @ 3000");

})


app.post("/", function(req, res){
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;

    // console.log(firstname, lastname, email);
    const data = {
        members : 
        [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }

            }
        ]
    };

    const JsonData = JSON.stringify(data);



    const url = "https://us5.api.mailchimp.com/3.0/lists/0dc961b292";
    const options = {
        method: "POST",
        auth: "lol:0d03b0799ff7bddacd48052b4cf9efe8-us5"
    }

    const request = https.request(url, options, function(response){

        
    if (response.statusCode == 200){
        // res.send("Succesfully subscribed");
        res.sendFile(__dirname + "/success.html")
    }
    else{
        // res.send("Plz try again");
        res.sendFile(__dirname + "/failure.html")

    }



        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })


    request.write(JsonData);
    request.end();

})


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/failure", function(req, res){
    res.redirect("/")
})

app.post("/success", function(req, res){
    res.redirect("/")
})

// Mailchimp Api key   : 0d03b0799ff7bddacd48052b4cf9efe8-us5
// list_ID/Audience_ID : 0dc961b292