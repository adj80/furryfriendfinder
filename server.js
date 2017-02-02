/*var http = require('http');
function handleRequest(request, response) {
	response.end('It works! path: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(3000, function(err) {
	if (err) {
		console.log("There was an error: " + err);

	}
	else {
		console.log("Server listening on port: " + 3000);
	}	

});


*/





var express = require('express');
var bodyParser = require('body-parser');

var Animals = require("./models")["Animals"];
//Animals.sync();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

app.get('/', function (req, res) {
	res.send('Hello');

})

app.post('/login', function (req, res) {
	

})



//require("./routes/api-routes.js")(app)
//require("./routes/html-routes.js")(app)

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);	

})