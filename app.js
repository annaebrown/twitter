const express = require( 'express' );
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

//RENDERING
const nunjucks = require('nunjucks')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {
	noCache: true
});
app.set('view engine', 'html');

//ROUTING
const routes = require("./routes/")
app.use("/", routes);

//SERVER PORT
app.listen(3000, function(){
	console.log("we are golden")
})

app.use('/special/', function(req, res, next) {
	res.send("You're my favorite unicorn!");
	next();
})

app.use(function(req, res, next) {
	console.log(`Status: ${res.statusCode}`)
	next();
})

// app.get('/stylesheets/style.css', function (req, res) {
// 	res.sendFile(__dirname + '/public/stylesheets/style.css');
// })
//Instead of GET handling every file in our public folder, let's make everything in that folder accessible by its path:

app.use(express.static('public'));
