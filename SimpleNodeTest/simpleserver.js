//==============================================================
// Just a simple server program to test out node js
//============================================================

var http = require('http'); // including http module

http.createServer(function (req, res) { // create server using http module
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Test Node JS Working');
}).listen(8080);

//command node simpleserver.js
//goto http://localhost:8080 on your browser and it should display 'Test Node JS Working'
