const express = require('express')
const app = express()

app.set('view engine', 'ejs') //set the view engine to ejs

app.use(express.static('resources')); //allow static files from resources folder to be used

app.get('/', function (req, res) { //specifically focusing on the roor '/' URL
  //res.send('First hello world using express')
  res.render('index'); //rendering the index.ejs 
})

app.listen(3000, function () { //app listening on port 3000 for connections
  console.log('Example app listening on port 3000!')
})