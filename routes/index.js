var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products'});
});


/* GET Contact Us page. */
router.get('/survey', function(req, res, next) {
  res.render('survey', { title: 'Contact'});
});



module.exports = router;
