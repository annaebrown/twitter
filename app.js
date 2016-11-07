var express = require( 'express' );
var app = express(); 

app.get('/', function(req, res) {
	res.send("we are golden!");
})

app.listen(3000, function(){
	console.log("we are golden")
})
