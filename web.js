var express = require('express');
var fs = require('fs');
var buffer = new Buffer(20);
var str_tst = new String(); 

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  	
	buffer=fs.readFileSync('index.html');
	str_tst=buffer.toString();
	response.send(str_tst);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
