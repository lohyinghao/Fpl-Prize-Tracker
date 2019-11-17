var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

const port = process.env.PORT || 3000;

// Uncomment to allow CORS on this proxy. Not recommended as server might get flooded
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
//   next();
// });

app.get('/api/:url(*)', (req, res) => {
  request(req.params.url).pipe(res);
});

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/common'));
app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
