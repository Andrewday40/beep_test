var express = require('express');
var server = express();

server.use(express.static(__dirname+'/public'));
// This is for CSS

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', { root: __dirname });
});
// This is for pointing to index.html for a webpage.

server.listen(8080);
// This is for localhost:8080
