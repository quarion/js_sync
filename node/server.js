console.log('Server starting...');
 
var express = require('express');
var mongo = require('mongoskin');
var bodyParser = require('body-parser');

var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://127.0.0.1/syncDB';

var app = express()
  , http = require('http')
  , server = http.createServer(app); 

app.use(bodyParser());
  
var port = process.env.PORT || 8080;
server.listen(port);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});


app.post('/insert', function(req, res) {
    var data = req.body;
    
	console.log( 'Adding: ' + JSON.stringify(data) );
	
	var db = mongo.db(connectionString, {native_parser:true});
	
	db.collection('data').insert(data, function(err, result) {
		if (err) throw err;
		if (result) console.log('Added!');
		
		res.send('Ok');
	});

});

app.post('/fetchAll', function(req, res) {

	var db = mongo.db(connectionString, {native_parser:true});
	
	db.collection('data').find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		res.json(result);
	});

});


console.log('Server is running on port ' + port);