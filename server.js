var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(4000);

console.log("Listening on port 4000!")