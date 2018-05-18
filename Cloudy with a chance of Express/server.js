const express = require('express')
const app = express()
const bodyParser = require('body-parser'); //getting body parser module
const request = require('request');

let apiKey = '1d41f23a07d1f8800592acdd9c1366d5';

app.set('view engine', 'ejs') //set the view engine to ejs

app.use(express.static('resources')); //allow static files from resources folder to be used

app.use(bodyParser.urlencoded({ extended: true })); //use the body parser to parse the req object

app.get('/', function (req, res) { //specifically focusing on the roor '/' URL
  //res.send('First hello world using express')
  res.render('index', { weather: null, error: null, humidity: null }); //rendering the index.ejs //added variables so that weather and error are not undefined while rendering to the browser
})

//post handling
app.post('/temperature', function (req, res) {
  console.log(req.body);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) { //make a get request to the weather API
    if (err) {
      res.render('index', { weather: null, error: 'Oops! The weather man is on vacation. Please try again', humidity: null });
    } else {
      console.log(body);
      let weather = JSON.parse(body);
      if (weather.cod == '404') { //added condition if city is not found
        res.render('index', { weather: null, error: 'Cannot find city on Earth', humidity: null });
      }
      else if (weather.main != undefined) {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!. I hope nature didn't dissapoint you`;
        let humidityText = `The humidity is ${weather.main.humidity} in ${weather.name}.`;
        if (req.body.weather != undefined) //if get weather
          res.render('index', { weather: weatherText, error: null, humidity: null });
        if (req.body.humidity != undefined) //if get humidity
          res.render('index', { weather: null, error: null, humidity: humidityText });
      } else {
        res.render('index', { weather: null, error: 'Oops! The weather man is on vacation. Please try again', humidity: null });
      }
    }
  });
})

app.listen(3000, function () { //app listening on port 3000 for connections
  console.log('Example app listening on port 3000!')
})