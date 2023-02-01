var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const image ="../images/beer.png";
  res.render('index.hbs', {
     image });
});

router.get('/beers', ((req, res, next) => {
  res.render('index.hbs', {title: "Beers"})
}))

router.get('/random-beer', ((req, res, next) => {
  res.render("index.hbs", {title: "Random Beers"})
}))

module.exports = router;
