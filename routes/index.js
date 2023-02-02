var express = require('express');
var router = express.Router();

const PunkAPIwrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIwrapper
const randomBeer = punkAPI.getRandom()

/* GET home page. */
router.get('/', function(req, res, next) {
  const image ="../images/beer.png";
  res.render('index.hbs', {
     image });
});

router.get('/beers', ((req, res, next) => {
  
  punkAPI
  .getBeers()
  .then(beersFromApi => {
    {console.log(beersFromApi)}
    res.render("beers.hbs", {beersFromApi})
  })
  .catch(error => console.log(error));
}))

router.get('/random-beer', ((req, res, next) => {
  punkAPI
  .getRandom()
  .then(result => {
    {console.log(responseFromAPI)}
    res.render("beerDetail.hbs", {result})
   })
  .catch(error => console.log(error));
}))

router.get('/beer/:id', ((req, res, next) => {
  punkAPI
  .getBeer(req.params.id)
  .then((result) => {
    res.render('beerDetail.hbs', {result})
  })
}))


module.exports = router;
