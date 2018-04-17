const express = require('express')
const app = express()
const bodyParser = require('body-parser'); //getting body parser module
const request = require('request');

let apiKey ='1d41f23a07d1f8800592acdd9c1366d5';

app.set('view engine', 'ejs') //set the view engine to ejs

app.use(express.static('resources')); //allow static files from resources folder to be used

app.use(bodyParser.urlencoded({ extended: true })); //use the body parser to parse the req object

app.get('/', function (req, res) { //specifically focusing on the roor '/' URL
  //res.send('First hello world using express')
  res.render('index', {weather: null, error: null});; //rendering the index.ejs //added variables so that weather and error are not undefined while rendering to the browser
})

//post handling
app.post('/temperature', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) { //make a get request to the weather API
    if(err){
      res.render('index', {weather: null, error: 'Oops! The weather man is on vacation. Please try again'});
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
      if(weather.main != undefined){
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      } else {
         res.render('index', {weather: null, error: 'Oops! The weather man is on vacation. Please try again'});
      }
    }
  });
})

app.listen(3000, function () { //app listening on port 3000 for connections
  console.log('Example app listening on port 3000!')
})