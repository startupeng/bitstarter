var express = require('express')
  , fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var indexBuf = fs.readFileSync('index.html');
  response.send(indexBuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
