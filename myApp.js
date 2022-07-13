require('dotenv').config()
let express = require('express');
let app = express();

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + "-" +     req.ip)
  next()
})

app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req,res){
  res.sendFile('views/index.html' , { root : __dirname})
})

// app.get('/json', (req, res) => {
//   const secret = process.env['MESSAGE_STYLE']
//   if (secret === "uppercase") {
//     res.json({
//       message: "Hello json".toUpperCase()
//     })
//   } else {
//      res.json({
//       message: "Hello json"
//     })
//   }
// })




































 module.exports = app;
