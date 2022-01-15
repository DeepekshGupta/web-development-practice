const express = require('express')
const app = express()
const port = 3000




app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', function(req, res){
  res.send('Hello World!')
}) 

app.get('/contact', function(req, res){
  res.send('email: deepeksh77673@gmail.com')
}) 

app.get('/about', function(req, res){
  res.send('im a very naish boi')
}) 