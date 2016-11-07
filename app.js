var express = require( 'express' );
var app = express(); 

app.use(function(req, res, next) {
	console.log('logged')
	next();
})

app.get('/', function(req, res) {
	res.send("we are golden!");
})

app.get('/news', function(req, res){
	res.send("word")
})

app.listen(3000, function(){
	console.log("we are golden")
})

