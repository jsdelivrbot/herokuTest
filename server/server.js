var express = require('express');
var path = require('path');
var app = express();

let port = process.env.PORT || 5000;
let appRoot = path.join(__dirname, "../");

app.use(express.static(appRoot + '/client'));

app.listen(port, function() {
  console.log('Node app is running on port', port);
});