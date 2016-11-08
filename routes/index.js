const router = require('express').Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get("/tweets/:id", function (req, res) {
  let id = req.params.id;
	let tweet = tweetBank.find( { id: id } );
  res.render( 'index', { tweet: tweet });
});

module.exports = router;
