const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.urlencoded())
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies


app.get('/', function(req, res){
    // res.send('Hello World!!!')
    res.sendFile(__dirname + "/index.html")
  });

app.get('/BMI_calculator', function(req, res){
  res.sendFile(__dirname + "/BMI_calculator.html")
});  
  
app.listen(3000, function(){
  console.log('server is running AT 3000')
});

app.post('/', function(req, res){
    console.log(req.body);
    res.send("Thanks for sending that")
    // res.send(__dirname + "/index.html") //only first line is sent...this one is ignored
  });

  app.post('/BMI_calculator', function(req, res){
    console.log(req.body);

    h = Number(req.body.height);
    w = Number(req.body.weight);

    bmi = w / (h * h);

    res.send("your BMI is: " + bmi);

    // res.send(__dirname + "/index.html") //only first line is sent...this one is ignored
  });  

