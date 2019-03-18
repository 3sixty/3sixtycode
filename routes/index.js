var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Josh Ross - About' });
});

router.get('/work', function (req, res, next) {
  res.render('work', {title: 'Josh Ross - Work' });

});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Josh Ross - Resume' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Josh Ross - Contact' });
});

module.exports = router;
