const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    const city_name = req.body.cityName;
    const api_key = "3ebc09a66e15dafaf2c2a5564394b4bc#"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + api_key;
   
    https.get(url, function(response){
        // console.log(response.statusCode)
        response.on("data", function(data){
        console.log(req.body.cityName);        
            const w_data = JSON.parse(data)
            const temp = w_data.main.temp
            const description = w_data.weather[0].description
            const icon = w_data.weather[0].icon
            const img_url = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

            res.write("<p>weather is: "+description+"</p>")
            res.write("<h1>temp iss "+ temp +"</h1>")
            res.write("<img src=" + img_url +">" )
   
            res.send()
        })
    })

})




app.listen(3000, function(){
    console.log("server is running @ 3000");
})



// const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=3ebc09a66e15dafaf2c2a5564394b4bc#";
// https.get(url, function(response){
//     console.log(response.statusCode)
//     response.on("data", function(data){
//         const w_data = JSON.parse(data)
//         const temp = w_data.main.temp
//         const description = w_data.weather[0].description
//         const icon = w_data.weather[0].icon
//         const img_url = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
//         // const img_url = "http://openweathermap.org/img/wn/10d@2x.png"
//         // res.write(img_url)
//         res.write("<p>weather is: "+description+"</p>")
//         res.write("<h1>temp iss "+ temp +"</h1>")
//         res.write("<img src=" + img_url +">" )
//         // <img src="" alt="">    
//         // console.log(w_data);
//         // res.write('<img src="http://openweathermap.org/img/wn/10d@2x.png">')
//         res.send()
// })
// })
// // res.send("server is up and running ")