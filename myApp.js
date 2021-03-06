require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " " + "- " +  req.ip)
  next()
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req,res){
  res.sendFile('views/index.html' , { root : __dirname})
})

// app.route('/name').get(function(req,res) {
//   var {first: firstname, last: lastname} = req.query
//   res.json({
//     name: `${firstname} ${lastname}`
//   })
// })
app.post('/name', function(req, res) {
  var {first: firstname, last: lastname} = req.body
  res.json({
    name: `${firstname} ${lastname}`
  })
}) 
app.get('/:word/echo', (req,res) => {
  var word = req.params.word
  res.json({
    echo: word
  })
})
app.get('/now', (req, res, next) =>{
  req.time = new Date().toString()
  next()
  
}, (req, res) => {
  res.json({
    time: req.time
  })
}
       )

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
