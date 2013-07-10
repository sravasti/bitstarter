var express = require('express');

var app = express.createServer(express.logger());

var FS = require('fs')

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send(FS.readFileSync('./index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
