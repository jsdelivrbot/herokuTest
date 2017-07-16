var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')

let port = process.env.PORT || 5000;
let appRoot = path.join(__dirname, "../");

app.use(cors())
app.use(express.static(appRoot + '/client'));

app.get("/test", function(req, res) {
	res.send("it works!");
})

app.listen(port, function() {
  console.log('Node app is running on port', port);
});