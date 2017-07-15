var express = require('express');
var app = express();
let cool = require('cool-ascii-faces');
let pg = require('pg');

const config = {
  user: "ekxblrinsypdus",
  database: "dauq65784356dt",
  password: "c1c7918c003da72747579b873b09d74fd8b873a6080d384af0a8fbf6799a6525",
  host: "ec2-54-163-254-143.compute-1.amazonaws.com",
  port: "5432",
  max: 10,
  idleTimeoutMillis: 30000,
  ssl: true
};

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response){
	let result = "";
	let times = process.env.TIMES || 5;
	for (var i = 0; i < times; i++) result += "hello: "+i+"\n";
	response.send(result);
})

let pool = new pg.Pool(config)
app.get('/db', function (request, response) {
	console.log("=>"+process.env.DATABASE_URL);
	pool.connect(function(err, client, done) {
		if(err){
			console.log(err)
		}else{
			client.query('SELECT * FROM test_table', function(err, result) {
				if (err){
					console.error(err);
					response.send("Error " + err);
				} else {
					response.render('pages/db', {results: result.rows} );
				}
    		});
		}
		done();
	});
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


