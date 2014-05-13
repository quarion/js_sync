console.log('Server starting...');

var mongoose = require('mongoose');  
var express = require('express');

var connectionString = 'mongodb://127.0.0.1/syncDB'; //process.env.CUSTOMCONNSTR_MONGOLAB_URI
mongoose.connect(connectionString);

var app = express()
  , http = require('http')
  , server = http.createServer(app); 

var port = 8080;//process.env.PORT || 8080;
server.listen(port);

app.get('/', function (req, res) {
	console.log('Request recieved');
	res.sendfile(__dirname + '/index.html');
});

console.log('Server is running.');