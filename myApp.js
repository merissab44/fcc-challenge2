let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req,res){
  res.sendFile('views/index.html' , { root : __dirname})

})




































 module.exports = app;
