require('dotenv').config()
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req,res){
  res.sendFile('views/index.html' , { root : __dirname})
})

app.get('/json', (req, res) => {
  var message = "Hello json"
  const secret = process.env['MESSAGE_STYLE']
  if (secret === "uppercase") {
    message = "Hello json".toUpperCase()
  } else {
     message = "Hello json"
  }
})




































 module.exports = app;
