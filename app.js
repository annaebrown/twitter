var express = require( 'express' );
var volleyball = require('volleyball');
var nunjucks = require('nunjucks')
var app = express();

nunjucks.configure('views', {
	noCache: true
});

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html');

app.engine('html', nunjucks.render)

app.get('/', function(req, res) {
    res.render('index', {title: 'Hall of Fame', people: people});
});

app.listen(3000, function(){
	console.log("we are golden")
})

app.use(volleyball);

app.use('/special/', function(req, res, next) {
	res.send("You are my favorite unicorn!");
	next();
})

app.use(function(req, res, next) {
	console.log(`logged! Status: ${res.statusCode}`)
	next();
})

app.get('/', function(req, res) {
	res.send("we are golden!");
})

app.get('/news', function(req, res){
	res.send("word")
})
