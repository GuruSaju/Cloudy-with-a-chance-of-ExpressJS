const express = require('express')
const app = express()

app.get('/', function (req, res) { //specifically focusing on the roor '/' URL
  res.send('First hello world using express')
})

app.listen(3000, function () { //app listening on port 3000 for connections
  console.log('Example app listening on port 3000!')
})