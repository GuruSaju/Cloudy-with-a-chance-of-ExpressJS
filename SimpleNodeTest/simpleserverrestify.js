var restify = require('restify');
const server = restify.createServer();

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

server.get('/:name', respond);
server.head('/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});